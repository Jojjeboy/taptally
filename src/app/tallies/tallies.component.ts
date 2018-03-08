import { Component, OnInit } from '@angular/core';
import { Tally } from '../Tally';
import { TALLIES } from '../mock-tallies';
import { LocalStorageServiceService } from '../../app/local-storage-service.service';
import { DatePipe } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';
declare var jquery: any;
declare var $: any;



@Component({
  selector: 'app-tallies',
  templateUrl: './tallies.component.html',
  styleUrls: ['./tallies.component.css']
})
export class TalliesComponent implements OnInit {

  constructor(private localStorageService: LocalStorageServiceService) { }
  tallies = [];
  selectedTally;

  ngOnInit() {
    this.tallies = this.localStorageService.getAll();
    if (this.tallies.length === 0) {
      this.tallies = TALLIES;
      this.localStorageService.writeLS(this.tallies);
    }
    this.resetOld();
    this.selectedTally = this.tallies[0];
  }

  public setSelectedTally(tally: Tally) {
    this.selectedTally = tally;
  }

  public getSelectedTally(tally: Tally): Tally {
    return this.selectedTally;
  }

  public isCurrentTally(tally: Tally) {
    return this.selectedTally.uuid === tally.uuid;
  }


  resetOld(): void {
    this.tallies.forEach( (tally) => {
      if (tally.resetEveryday && this.isOld(tally.last)) {
        tally.count = 0;
      }
    });
  }

  isOld(tallyDate): Boolean {
    const today = new Date();
    today.setHours(0, 0 , 0, 0);
    if (tallyDate < today) {
      return true;
    }
    return false;
  }

  public showMessage(tally: Tally) {
    // alert('Close accordion');
    $('#collapseOne').collapse('toggle');
    this.setSelectedTally(tally);
  }
}
