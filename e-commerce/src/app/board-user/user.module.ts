import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardUserComponent } from './board-user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [BoardUserComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
