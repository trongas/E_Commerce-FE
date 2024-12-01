import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any; // Store current user data
  firstName: string = ''; // To hold the split first name
  lastName: string = ''; // To hold the split last name
  currentPassword!: string; // For storing current password input
  newPassword!: string; // For storing new password input
  confirmPassword!: string; // For storing password confirmation


  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    // Retrieve current user data from local storage or service
    this.currentUser = this.storageService.getUser();
      console.log(this.currentUser.username);

    // If the current user has a fullName, split it into firstName and lastName
    if (this.currentUser && this.currentUser.username) {
      const nameParts = this.currentUser.username.split(' ');
      this.firstName = nameParts[0] || '';  // Assign the first part as firstName
      this.lastName = nameParts.slice(1).join(' ') || '';  // Join the rest as lastName
    }
  }

  // Optionally, add methods to handle password change logic if needed
  updatePassword(): void {
    if (this.newPassword !== this.confirmPassword) {
      alert('New password and confirm password do not match!');
      return;
    }

    // Perform logic for updating password
    console.log('Password updated');
  }
}
