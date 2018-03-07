import { Component, OnInit } from '@angular/core';
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
  uuid = null;
  tally: Tally = null;
  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageServiceService,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      console.log(params.id);
      if (params.id) {
        this.uuid = params.id;
      }
    });
  }

  ngOnInit() {
    this.tally = this.localStorageService.getItem(this.uuid);
    if (!this.tally) {
      console.log('booooogus id');
      this.router.navigate(['/']);
    }


  }

  initTally(uuid: String): any {
    this.tally = this.localStorageService.getItem(uuid);
    if (!this.tally) {
      return false;
    }
    return this.tally;
  }

}
