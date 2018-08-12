import { TestBed, async } from '@angular/core/testing';
import { SidebarMenuComponent } from './sidebar-menu.component';
describe('SidebarMenuComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarMenuComponent]
    }).compileComponents();
  }));

  it('should create the sidebar menu', async(() => {
    const fixture = TestBed.createComponent(SidebarMenuComponent);
    const sidebar = fixture.debugElement.componentInstance;
    expect(sidebar).toBeTruthy();
  }));
});
