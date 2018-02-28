import { Tally } from '../app/Tally';


export const TALLIES: Tally[] = [
    {
      name: 'Armhävningar',
      step: 25,
      goal: 100,
      resetEveryday: true,
      count: 2,
      last: new Date("Wed Feb 28 2018 08:42:58 GMT+0100 (Västeuropa, normaltid)"),
      current: null
    },
    {
      name: 'Situps',
      step: 1,
      goal: 20,
      resetEveryday: true,
      count: 1,
      last: new Date("Wed Feb 28 2018 08:42:58 GMT+0100 (Västeuropa, normaltid)"),
      current: null
    },
    {
      name: 'Gjort 100 armhävningar',
      step: 1,
      goal: 60,
      resetEveryday: false,
      count: 1,
      last: new Date("Wed Feb 28 2018 08:42:58 GMT+0100 (Västeuropa, normaltid)"),
      current: null
    }
  ];