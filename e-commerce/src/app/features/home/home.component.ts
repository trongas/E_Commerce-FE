import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';
import { EventBusService } from 'src/app/_shared/event-bus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  content?: string;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  visibleSidebar: boolean = false;


  languages = ['English', 'Français', 'Español', '中文', 'Deutsch'];
  selectedLanguage: string = 'English';

  menuItems: any[] = [];
  eventBusSub?: Subscription;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      },
    });

    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

    this.menuItems = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
      ...(this.showAdminBoard
        ? [{ label: 'Admin Board', icon: 'pi pi-cog', routerLink: '/admin' }]
        : []),
      ...(this.showModeratorBoard
        ? [{ label: 'Moderator Board', icon: 'pi pi-user', routerLink: '/mod' }]
        : []),
      ...(this.isLoggedIn
        ? [{ label: 'User', icon: 'pi pi-user', routerLink: '/user' }]
        : []),
    ];

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }
  // Trạng thái mở/đóng dropdown
  isDropdownOpen: boolean = false;
    toggleSidebar() {
      this.visibleSidebar = !this.visibleSidebar;
    }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  selectLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.isDropdownOpen = false;
    // Implement language change logic
  }
  logout(): void {
    this.authService.logout().subscribe({
      next: (res) => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
