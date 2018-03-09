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
import { AddTallyComponent } from './add-tally/add-tally.component';


const appRoutes: Routes = [
  {
    path: 'tally/edit/:id',
    component: EditTallyComponent
  },
  {
    path: 'tally/add',
    component: AddTallyComponent
  },
  {
    path: '',
    component: TalliesComponent,
    data: { title: 'Tallies List' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TalliesComponent,
    TimeAgoPipe,
    TallyComponent,
    EditTallyComponent,
    AddTallyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [LocalStorageServiceService, TimeAgoPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
