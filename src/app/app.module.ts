import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalStorageServiceService } from '../app/local-storage-service.service';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TalliesComponent } from './tallies/tallies.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { TestComponent } from './test/test.component';
import { TallyComponent } from './tally/tally.component';
import { TallyDetailComponent } from './tally-detail/tally-detail.component';


const appRoutes: Routes = [
  { 
    path: 'tally/:id',
    component: TallyDetailComponent 
  },
  {
    path: 'tallies',
    component: TalliesComponent,
    data: { title: 'Tallies List' }
  },
  { path: '',
    redirectTo: '/tallies',
    pathMatch: 'full'
  },
  
  { path: 'tally',
    redirectTo: '/tallies',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TalliesComponent,
    TimeAgoPipe,
    TestComponent,
    TallyComponent,
    TallyDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [/*LocalStorageService*/LocalStorageServiceService, TimeAgoPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
