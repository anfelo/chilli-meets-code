import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { SidebarMenuModule } from './sidebar-menu/sidebar-menu.module';
import { WelcomePageModule } from './welcome-page/welcome-page.module';
import { AboutPageModule } from './about-page/about-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AboutPageModule,
    SidebarMenuModule,
    WelcomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
