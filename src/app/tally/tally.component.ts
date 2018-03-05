import { Component, OnInit, Input } from '@angular/core';
import { Tally } from '../Tally';
import { TALLIES } from '../mock-tallies';
import { DatePipe } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';

@Component({
  selector: 'app-tally',
  templateUrl: './tally.component.html',
  styleUrls: ['./tally.component.css']
})


export class TallyComponent implements OnInit {
  @Input() tally: Tally;

  constructor() { }
  tallies = TALLIES;

  ngOnInit() {
    if(this.tally == null){
      this.tally = TALLIES[0];
  
    }
  }

}
