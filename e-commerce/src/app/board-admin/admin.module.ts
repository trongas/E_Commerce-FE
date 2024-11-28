import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardAdminComponent } from './board-admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [BoardAdminComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [BoardAdminComponent], // Export only if used elsewhere

})
export class AdminModule {}
