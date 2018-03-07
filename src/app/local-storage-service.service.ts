import { Injectable } from '@angular/core';
import { Tally } from '../app/Tally';

@Injectable()
export class LocalStorageServiceService {

  key = 'TapTally';
  constructor() {
    if (window.hasOwnProperty('localStorage')) {
      if (localStorage.getItem(this.key) === null) {
        localStorage.setItem(this.key, JSON.stringify([]));
      }
    } else {
      window.alert('Please considering upgrading browser to be able to use lStore Plugin');
    }
  }

  getAll(): Array<any> {
    return JSON.parse(localStorage.getItem(this.key));
  }

  add(tally: Tally) {
    const lsItems = this.getAll();
    lsItems.push(tally);
    this.writeLS(lsItems);
  }

  writeLS(lsItems: Array<Tally>): void {
    localStorage.setItem(this.key, JSON.stringify(lsItems));
  }

  clear() {
    localStorage.removeItem(this.key);
  }

  removeItem(key) {
    const lsItems = this.getAll();
    const newData: any[] = [];
    let iter = 0;
    let foundItem = false;
    while (iter < lsItems.length) {
      if (key !== lsItems[iter].uuid) {
        newData.push(lsItems[iter]);
      } else {
        foundItem = true;
      }
      iter++;
    }
    this.writeLS(newData);
    return foundItem;
  }

  update(obj: Tally) {
    const lsItems = this.getAll();
    let iter = 0;
    const uuid = obj.uuid;
    let foundItem = false;
    while (iter < lsItems.length) {
      if (uuid === lsItems[iter].uuid) {
        lsItems[iter] = obj;
        foundItem = true;
      }
      iter++;
    }
    this.writeLS(lsItems);
    return foundItem;
  }

  itemExists(key: String): boolean {
    const lsItems = this.getAll();
    let iter = 0;
    while (iter < lsItems.length) {
      if (key === lsItems[iter].uuid) {
        return true;
      }
      iter++;
    }
    return false;
  }

  getItem(key: String): any {
    const lsItems = this.getAll();
    let iter = 0;
    while (iter < lsItems.length) {
      if (key === lsItems[iter].uuid) {
        return lsItems[iter];
      }
      iter++;
    }
    return false;
  }

  public getNrOfItems(): number {
    return this.getAll().length;
  }
}
