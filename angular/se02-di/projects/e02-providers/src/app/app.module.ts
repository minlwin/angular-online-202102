import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ProvideClassComponent } from './provide-class/provide-class.component';
import { ModifiedStorage } from './services/modified.storage';
import { IStorage } from './services/storage';
import { StringStorage } from './services/string-storage';
export const storage1 = new InjectionToken("storage1")
export const storage2 = new InjectionToken("storage2")

const ValueStorage: IStorage = {
  list: [],
  add: (str) => ValueStorage.list.push(str)
}

function getStorage(): IStorage {
  const s = new ModifiedStorage()
  s.add("Angular")
  s.add("TypeScript")
  s.add("Something")
  s.add("Other")
  return s
}

@NgModule({
  declarations: [
    AppComponent,
    ProvideClassComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: 1, useValue: ValueStorage
    },
    { provide: 2, useClass: StringStorage },
    { provide: 3, useFactory: getStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
