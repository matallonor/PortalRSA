import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NotifyService } from '../notify.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-main-container-component',
  templateUrl: './main-container-component.component.html',
  styleUrls: ['./main-container-component.component.css']
})
export class MainContainerComponentComponent implements OnInit, OnDestroy {
  
  private subscription: Subscription;
  private url: SafeResourceUrl;

  constructor(private notifyService: NotifyService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.subscription = this.notifyService.getNotifyObservable().subscribe((res) => {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(res);
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
