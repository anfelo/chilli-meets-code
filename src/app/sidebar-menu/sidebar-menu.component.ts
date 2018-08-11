import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {
  public isMenuCollapsed: boolean = false;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize($event) {
    const width = $event.target.innerWidth;
    if (width > 425 && this.isMenuCollapsed) {
      this.toggleMenu($event);
    }
  }

  public toggleMenu($event) {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
