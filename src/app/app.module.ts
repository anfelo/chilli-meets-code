import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarMenuModule } from './sidebar-menu/sidebar-menu.module';
import { WelcomePageModule } from './welcome-page/welcome-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SidebarMenuModule, WelcomePageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
