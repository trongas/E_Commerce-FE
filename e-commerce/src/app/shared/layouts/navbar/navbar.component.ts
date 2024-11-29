import { Component, HostListener } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  languages = ['English', 'Français', 'Español', '中文', 'Deutsch'];
  selectedLanguage: string = 'English';
  isMenuOpen = false;
  isDropdownOpen = false;
  isSmallScreen = false;
  isDropdownVisibleAccount = false;

  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) {}
  @HostListener('window:resize', [])
  onResize() {
    this.isSmallScreen = window.innerWidth < 768; // Adjust breakpoint as needed
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleDropdownAccount(): void {
    this.isDropdownVisibleAccount = !this.isDropdownVisibleAccount;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  selectLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.isDropdownOpen = false;
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
