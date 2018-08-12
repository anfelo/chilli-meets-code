import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  public isMenuCollapsed: boolean = false;

  public menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = [
      {
        text: 'WELCOME',
        url: '/home',
        isActive: true
      },
      {
        text: 'ABOUT ME',
        url: '/about',
        isActive: false
      },
      {
        text: 'BLOG',
        url: '/blog',
        isActive: false
      },
      {
        text: 'COURSES',
        url: '/course',
        isActive: false
      },
      {
        text: 'GET IN TOUCH',
        url: '/contact',
        isActive: false
      }
    ];
  }

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
