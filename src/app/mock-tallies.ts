import { Tally } from '../app/Tally';

const now = new Date();
const first = new Date(now.setDate(now.getDay() - 2));
const second = new Date(now.setDate(now.getDay() - 4));

export const TALLIES: Tally[] = [
    {
      uuid: '69314ec3-c158-47bd-b5d4-ec4c4a4c2c60',
      name: 'Pushups',
      step: 1,
      goal: 30,
      resetEveryday: true,
      count: 55,
      last: first,
      current: null
    },
    {
      uuid: '382c8442-0d16-4996-a568-1439de830660',
      name: 'Situps',
      step: 1,
      goal: 20,
      resetEveryday: true,
      count: 0,
      last: second,
      current: null
    }
  ];
