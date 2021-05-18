import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  home = [{ outlets: { primary: ['home'], sideMenu: ['home'] } }]
  customer = [{ outlets: { primary: ['customer'], sideMenu: ['customer'] } }]
  product = [{ outlets: { primary: ['product'], sideMenu: ['home'] } }]
  sale = [{ outlets: { primary: ['sale'], sideMenu: ['home'] } }]
}
