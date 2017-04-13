import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../menu-item';
import { Subscription } from 'rxjs/Subscription';

import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input('menuItem') data : MenuItem;

  url : string;

  constructor( private notifyService: NotifyService ){
  }

  ngOnInit() {
    this.url = this.data.url;
  }

  // This method uses a Service to share data (url) with the main-container-component
  // When clicking a MenuItem it will send the url that is going to be loaded in the container
  public openIframe(event, data) {
    this.notifyService.notifyOtherComponent(this.url);
  }

}
