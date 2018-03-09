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
  @Output() callback: EventEmitter<Tally> = new EventEmitter<Tally>();

  constructor(
    private localStorageService: LocalStorageServiceService
  ) { }

  ngOnInit() {
    if (!this.tally) {
      console.log('booooogus tally');
    }
  }

  public delete(): void {
    this.localStorageService.removeItem(this.tally.uuid);
  }

  public save(): void {
    this.localStorageService.update(this.tally);
    this.callback.emit(this.tally);
  }
}
