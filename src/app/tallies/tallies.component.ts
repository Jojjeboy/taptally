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

  constructor(private localStorageServiceService: LocalStorageServiceService) { }
  tallies = [];
  selectedTally;

  ngOnInit() {
    this.tallies = this.localStorageServiceService.getAll();
    if (this.tallies.length === 0) {
      this.tallies = TALLIES;
      this.localStorageServiceService.writeLS(this.tallies);
    }
    this.resetOld();
    this.selectedTally = this.tallies[0];
  }

  public setSelectedTally(tally: Tally) {
    this.selectedTally = tally;
  }

  public isCurrentTally(tally: Tally){
    return this.selectedTally.uuid == tally.uuid;

  }

  resetOld(): void{
    this.tallies.forEach( (tally) => {
      if (tally.resetEveryday && this.isOld(tally.last)) {
        tally.count = 0;
      }
    });
  }

  isOld(tallyDate): Boolean {
    var today = new Date();
    today.setHours(0,0,0,0)
    if (tallyDate < today) {
      return true;
    }
    return false;
  }
}
