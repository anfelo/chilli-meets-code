import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarMenuComponent } from './sidebar-menu.component';

@NgModule({
  imports: [CommonModule],
  exports: [SidebarMenuComponent],
  declarations: [SidebarMenuComponent]
})
export class SidebarMenuModule {}
