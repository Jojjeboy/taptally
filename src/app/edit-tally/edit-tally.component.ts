import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Tally } from '../Tally';
import { LocalStorageServiceService } from '../local-storage-service.service';

@Component({
  selector: 'app-edit-tally',
  templateUrl: './edit-tally.component.html',
  styleUrls: ['./edit-tally.component.css']
})
export class EditTallyComponent implements OnInit {
  @Input() tally: Tally;
  @Output() deleteCallbackFunc: EventEmitter<String> = new EventEmitter<String>();
  @Output() saveCallbackFunc: EventEmitter<Tally> = new EventEmitter<Tally>();

  constructor(
    private localStorageService: LocalStorageServiceService
  ) { }

  ngOnInit() {
    if (!this.tally) {
      console.log('booooogus tally');
    }
  }

  public delete(): void {
    this.deleteCallbackFunc.emit(this.tally.uuid);
  }

  public save(): void {
    this.saveCallbackFunc.emit(this.tally);
  }
}
