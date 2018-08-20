import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarMenuComponent } from './sidebar-menu.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [SidebarMenuComponent],
  declarations: [SidebarMenuComponent]
})
export class SidebarMenuModule {}
