import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarMenuModule } from './sidebar-menu/sidebar-menu.module';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), SidebarMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
