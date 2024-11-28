import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  languages = ['English', 'Français', 'Español', '中文', 'Deutsch'];
  selectedLanguage: string = 'English';
  isMenuOpen = false;
  isDropdownOpen = false;
  isSmallScreen = false;

  @HostListener('window:resize', [])
  onResize() {
    this.isSmallScreen = window.innerWidth < 768; // Adjust breakpoint as needed
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
   }
}
