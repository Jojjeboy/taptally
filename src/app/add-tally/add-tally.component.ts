import { Component, OnInit } from '@angular/core';
import { Tally } from '../Tally';
import { Uuid } from '../Uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageServiceService } from '../local-storage-service.service';

@Component({
  selector: 'app-add-tally',
  templateUrl: './add-tally.component.html',
  styleUrls: ['./add-tally.component.css']
})
export class AddTallyComponent implements OnInit {

  tally = new Tally();
  constructor(
    private localStorageService: LocalStorageServiceService,
    private router: Router
  ) {
    this.tally.uuid = Uuid.UUID();
    this.tally.count = 0;
  }

  ngOnInit() {
  }

  public save(): void {
    this.localStorageService.add(this.tally);
    this.router.navigate(['/']);
  }

}
