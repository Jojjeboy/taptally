import { Component, OnInit, Input } from '@angular/core';
import { Tally } from '../Tally';
import { Uuid } from '../Uuid';
import { Router } from '@angular/router';
import { LocalStorageServiceService } from '../local-storage-service.service';


@Component({
  selector: 'app-add-tally',
  templateUrl: './add-tally.component.html',
  styleUrls: ['./add-tally.component.css']
})
export class AddTallyComponent implements OnInit {
  @Input() tallies: Tally[];
  @Input() callback: Function;

  tally = new Tally();
  constructor(
    private localStorageService: LocalStorageServiceService,
    private routingService: Router
  ) {
    this.tally.uuid = Uuid.UUID();
    this.tally.count = 0;
    this.tally.last = new Date();
  }

  ngOnInit() {
  }

  public save(): void {
    this.tallies.push(this.tally);
    this.localStorageService.add(this.tally);
    // run parent function to close accordion
    this.callback(this.tally);
  }

}
