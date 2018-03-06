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
      this.selectedTally = this.tallies[0];
      this.localStorageServiceService.writeLS(this.tallies);
    }
  }

  public setSelectedTally(tally) {
    this.selectedTally = tally;
  }
}
