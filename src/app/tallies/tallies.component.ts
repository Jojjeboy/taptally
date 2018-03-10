import { Component, OnInit } from '@angular/core';
import { Tally } from '../Tally';
import { TALLIES } from '../mock-tallies';
import { LocalStorageServiceService } from '../../app/local-storage-service.service';
import { DatePipe } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';
declare var jquery: any;
declare var $: any;
declare var window: any;



@Component({
  selector: 'app-tallies',
  templateUrl: './tallies.component.html',
  styleUrls: ['./tallies.component.css']
})
export class TalliesComponent implements OnInit {

  constructor(private localStorageService: LocalStorageServiceService) { }
  tallies = [];
  selectedTally: Tally;
  formMode: String = ' Add tally';

  ngOnInit() {
    this.tallies = this.localStorageService.getAll().reverse();
    if (this.tallies.length === 0) {
      this.tallies = TALLIES;
      this.localStorageService.writeLS(this.tallies);
    }
    this.resetOld();
    this.setSelectedTally(this.tallies[0]);
  }

  public setSelectedTally(tally: Tally) {
    this.selectedTally = tally;
  }

  public getSelectedTally(tally: Tally): Tally {
    return this.selectedTally;
  }

  public isCurrentTally(tally: Tally) {
    return this.selectedTally.uuid === tally.uuid;
  }

  public setFormMode(formMode: String): void {
    this.formMode = formMode;
  }


  resetOld(): void {
    this.tallies.forEach( (tally) => {
      if (tally.resetEveryday && this.isOld(tally.last)) {
        tally.count = 0;
      }
    });
  }

  isOld(tallyDate: Date): Boolean {
    const today = new Date();
    today.setHours(0, 0 , 0, 0);
    if (tallyDate < today) {
      return true;
    }
    return false;
  }

  public onSave(tally: Tally) {
    $('#addTallyContent').collapse('toggle');
    this.localStorageService.update(tally);
    this.setSelectedTally(tally);
    this.setFormMode('Add Tally');
    scrollTo(window.document.body, 0);
  }

  public onDelete(uuid: String) {
    this.setSelectedTally(this.tallies[0]);
    $('#editTallyContent').collapse('toggle');
    this.localStorageService.removeItem(uuid);
    scrollTo(window.document.body, 0);
  }

  public toggleEditAccordion(tally: Tally) {
    this.setSelectedTally(tally);
    this.setFormMode('Edit Tally');
    $('#editTallyContent').collapse('toggle');

    $('#editTallyContent').on('shown.bs.collapse', function () {
      scrollTo(window.document.body, $('body').height());
    });
  }
}
