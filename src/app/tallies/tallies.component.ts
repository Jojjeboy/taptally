import { Component, OnInit } from '@angular/core';
import { Tally } from '../Tally';
import { TALLIES } from '../mock-tallies';
import { LocalStorageServiceService } from '../../app/local-storage-service.service';
import { DatePipe } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';

@Component({
  selector: 'app-tallies',
  templateUrl: './tallies.component.html',
  styleUrls: ['./tallies.component.css']
})
export class TalliesComponent implements OnInit {

  constructor(private localStorageServiceService: LocalStorageServiceService) {
    console.log(localStorageServiceService.getNrOfItems());
   }
  tallies = TALLIES;
  selectedTally;

  public setSelectedTally(tally) {
    this.selectedTally = tally;
  }

  public increase(tally): void {
    tally.count = tally.count + tally.step;
  }
  public decrease(tally): void {
    if (tally.count > 0) {
      tally.count = tally.count - tally.step;
    }
  }

  ngOnInit() {
    if (this.selectedTally == null) {
      this.selectedTally = this.tallies[0];
    }
  }

}
