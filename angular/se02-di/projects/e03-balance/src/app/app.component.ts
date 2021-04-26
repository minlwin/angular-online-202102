import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { StorageService } from './models/balance.model';

export const STORAGE_SERVICES = new InjectionToken("STORAGE_SERVICES")

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  constructor(@Inject(STORAGE_SERVICES) private storageServices: StorageService[]) { }

  ngOnInit(): void {
    // Load Data of Services
    this.storageServices.forEach(service => service.loadResource())
  }
}
