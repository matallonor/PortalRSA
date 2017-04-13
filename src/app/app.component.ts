import { Component } from '@angular/core';

import { NotifyService } from './notify.service';
import { MenuServiceService } from "app/menu-service.service";
import { Jsonp, ConnectionBackend } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotifyService, 
              MenuServiceService
  ]
})
export class AppComponent {
  title = 'app works!';
}
