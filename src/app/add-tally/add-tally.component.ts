import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tally } from '../Tally';
import { Uuid } from '../Uuid';
import { Router } from '@angular/router';
import { LocalStorageServiceService } from '../local-storage-service.service';
declare var jquery: any;
declare var $: any;
declare var window: any;

@Component({
  selector: 'app-add-tally',
  templateUrl: './add-tally.component.html',
  styleUrls: ['./add-tally.component.css']
})
export class AddTallyComponent implements OnInit {
  @Input() tallies: Tally[];
  @Output() callback: EventEmitter<Tally> = new EventEmitter<Tally>();

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
    this.tallies.unshift(this.tally);
    this.localStorageService.add(this.tally);
    this.callback.emit(this.tally);
  }


}
