import { Component, OnInit, Input } from '@angular/core';
import { Tally } from '../Tally';
import { TALLIES } from '../mock-tallies';
import { DatePipe } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';
import { LocalStorageServiceService } from '../../app/local-storage-service.service';

@Component({
  selector: 'app-tally',
  templateUrl: './tally.component.html',
  styleUrls: ['./tally.component.css']
})


export class TallyComponent implements OnInit {
  @Input() tally: Tally;

  constructor(private localStorageServiceService: LocalStorageServiceService) { }
  tallies = TALLIES;

  ngOnInit() {
    if (this.tally == null) {
      this.tally = TALLIES[0];
    }
  }

  public increase(): void {
    this.tally.count = this.tally.count + this.tally.step;
    this.save(this.tally);
  }
  public decrease(): void {
    if (this.tally.count > 0) {
      this.tally.count = this.tally.count - this.tally.step;
      this.save(this.tally);
    }
  }
  public reset(): void {
    this.tally.count = 0;
  }

  save(tally: Tally) {
    this.localStorageServiceService.update(tally);
  }
}
