import { Component, OnInit, Input } from '@angular/core';
import { Tally } from '../../Tally';
import { TALLIES } from '../../mock-tallies';
import { DatePipe } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';
import { LocalStorageServiceService } from '../../local-storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tally',
  templateUrl: './tally.component.html',
  styleUrls: ['./tally.component.css']
})


export class TallyComponent implements OnInit {
  @Input() tally: Tally;

  constructor(private localStorageService: LocalStorageServiceService, private router: Router) { }
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

  public goToDetailsPage() {
    console.log('yyyyyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeey');
    if (this.localStorageService.itemExists(this.tally.uuid)) {
      this.router.navigate(['tally/edit/' + this.tally.uuid]);
    }
  }

  save(tally: Tally) {
    tally = this.touchDate(tally);
    this.localStorageService.update(tally);
  }

  touchDate(tally: Tally): Tally {
    tally.last = new Date();
    return tally;
  }
}
