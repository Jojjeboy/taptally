import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalStorageServiceService } from '../app/local-storage-service.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TalliesComponent } from './tallies/tallies.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { TallyComponent } from './tallies/tally/tally.component';
import { EditTallyComponent } from './edit-tally/edit-tally.component';


const appRoutes: Routes = [
  {
    path: 'tally/edit/:id',
    component: EditTallyComponent
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
    TallyComponent,
    EditTallyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [/*LocalStorageService*/LocalStorageServiceService, TimeAgoPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
