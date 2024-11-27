import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardModeratorComponent } from './board-moderator.component';
import { ModeratorRoutingModule } from './moderator-routing.module';

@NgModule({
  declarations: [BoardModeratorComponent],
  imports: [CommonModule, ModeratorRoutingModule],
})
export class ModeratorModule {}
