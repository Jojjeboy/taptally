import { Component, OnInit } from '@angular/core';
import { Tally } from '../Tally';
import { TALLIES } from '../mock-tallies';
import { CounterService } from '../../app/counter.service';
import { DatePipe } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';

@Component({
  selector: 'app-tallies',
  templateUrl: './tallies.component.html',
  styleUrls: ['./tallies.component.css']
})
export class TalliesComponent implements OnInit {

  constructor(private counterService: CounterService) {}


  tallies = TALLIES;

  ngOnInit() {
    this.tallies.forEach((tally) => {
      tally.count = this.counterService.getCurrentCount(tally);
    });

    
  }

}
