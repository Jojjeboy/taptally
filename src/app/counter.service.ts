import { Injectable } from '@angular/core';
import { Tally } from '../app/Tally';

@Injectable()
export class CounterService {

  constructor() { }
  public count = 0;

  public getCurrentCount(tally: Tally) {
    return tally.step * tally.count;
    
  }
}