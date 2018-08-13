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
        url: '/'
      },
      {
        text: 'ABOUT ME',
        url: '/about'
      },
      {
        text: 'BLOG',
        url: '/blog'
      },
      {
        text: 'COURSES',
        url: '/courses'
      },
      {
        text: 'GET IN TOUCH',
        url: '/contact'
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
