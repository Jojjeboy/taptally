import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CounterService } from '../app/counter.service';
//import {WebStorageModule, LocalStorageService} from "angular-localstorage";


import { AppComponent } from './app.component';
import { TalliesComponent } from './tallies/tallies.component';
import { TimeAgoPipe } from 'time-ago-pipe';


@NgModule({
  declarations: [
    AppComponent,
    TalliesComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule
    //,WebStorageModule
  ],
  providers: [/*LocalStorageService*/CounterService, TimeAgoPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
