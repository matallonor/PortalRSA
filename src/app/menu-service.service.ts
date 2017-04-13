import { Injectable } from '@angular/core';
import { JsonpModule, Jsonp, Response } from '@angular/http';
import { MenuItem } from "app/menu-item";

@Injectable()
export class MenuServiceService {
  
  // A Map with MenuItem.itemDescription as key and MenuItem.itemSource as value
  private iconsMap: { [key: string]: string; };

  // TODO: replace the itunes url with the root of our own API url
  apiRoot: string = 'https://itunes.apple.com/search';

  constructor(private jsonp: Jsonp) {
    // TODO: populate the map with all the MenuItem options and icons sources
    this.iconsMap = {
      "Personalització": "/assets/images/ic_personalitzacio.png", 
      "Catàleg de dominis": "/assets/images/ic_cataleg.svg",
      "dummy": ""
    };
    
  }

  getMenuOptions(user: string, app: string, environment: string): MenuItem[] {

    let apiURL = `${this.apiRoot}?usuari=${user}&app=${app}&entorn=${environment}&callback=JSONP_CALLBACK`;

    // TODO: this is just dummy data. 
    // As soon as we can retrieve this data via REST Service
    // we should replace this code for the commented Jsonp request below
    let dummyResponse: MenuItem[] = [
      new MenuItem("Personalització", this.iconsMap["Personalització"], "http://getbootstrap.com/components/#wells"),
      new MenuItem("Catàleg de dominis", this.iconsMap["Catàleg de dominis"], "http://getbootstrap.com/components/#wells"),
      new MenuItem("dummy", this.iconsMap["dummy"], "http://getbootstrap.com/components/#wells")
    ];

    return dummyResponse;

    /*
    return this.jsonp.request(apiURL)
        .map(res => {
          return res.json().results.map(item => {
            return new MenuItem(
                item.itemDescription,
                this.iconsMap[item.imgSource],
                item.url
            );
          });
        });
     */
  }



}