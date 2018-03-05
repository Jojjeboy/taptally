import { Component } from '@angular/core';
import { CounterService } from '../app/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {}
  /*
  public getCount() {
    return this.counterService.count;
  }
  public increase(){
    this.counterService.count += 1;
  }
  public decrease(){
    if(this.counterService.count > 0){
      this.counterService.count -= 1;
    }
  }*/
}
