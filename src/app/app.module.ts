import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { SidebarMenuComponentComponent } from './sidebar-menu-component/sidebar-menu-component.component';
import { MainContainerComponentComponent } from './main-container-component/main-container-component.component';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { MenuItemComponent } from './menu-item/menu-item.component';

import { NotifyService } from './notify.service';
import { FileManagerComponent } from './file-manager/file-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SidebarMenuComponentComponent,
    MainContainerComponentComponent,
    MenuItemComponent,
    FileManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AlertModule.forRoot()
  ],
  providers: [NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
