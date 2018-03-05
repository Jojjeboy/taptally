import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalStorageServiceService } from '../app/local-storage-service.service';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TalliesComponent } from './tallies/tallies.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { TestComponent } from './test/test.component';
import { TallyComponent } from './tally/tally.component';

@NgModule({
  declarations: [
    AppComponent,
    TalliesComponent,
    TimeAgoPipe,
    TestComponent,
    TallyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [/*LocalStorageService*/LocalStorageServiceService, TimeAgoPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
