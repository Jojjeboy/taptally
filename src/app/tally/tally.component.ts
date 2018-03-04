import { Component, OnInit, Input } from '@angular/core';
import { Tally } from '../Tally';

@Component({
  selector: 'app-tally',
  templateUrl: './tally.component.html',
  styleUrls: ['./tally.component.css']
})


export class TallyComponent implements OnInit {
  @Input() Tally: Tally;

  constructor() { }

  ngOnInit() {
  }

}
