import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuServiceService } from '../menu-service.service'

@Component({
  selector: 'app-sidebar-menu-component',
  templateUrl: './sidebar-menu-component.component.html',
  styleUrls: ['./sidebar-menu-component.component.css']
})
export class SidebarMenuComponentComponent implements OnInit {

  menuItems : MenuItem[];
  constructor(private menuService: MenuServiceService) { 
    this.menuItems = this.menuService.getMenuOptions("MTALLON", "RSA", "DEV");
  }

  ngOnInit() {
  }

}
