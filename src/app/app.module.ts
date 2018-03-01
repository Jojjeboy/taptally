import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CounterService } from '../app/counter.service';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TalliesComponent } from './tallies/tallies.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: { title: 'Tap Tally' }
  },
  {
    path: 'test',
    component: TestComponent,
    data: { title: 'test' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TalliesComponent,
    TimeAgoPipe,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [/*LocalStorageService*/CounterService, TimeAgoPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
