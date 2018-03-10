import { Tally } from '../app/Tally';

const now = new Date();
const first = new Date(now.setHours(now.getHours() - 2));
const second = new Date(now.setDate(now.getDay() - 4));

export const TALLIES: Tally[] = [
    {
      uuid: '69314ec3-c158-47bd-b5d4-ec4c4a4c2c60',
      name: 'Pushups',
      step: 25,
      goal: 100,
      resetEveryday: true,
      count: 20,
      last: first
    },
    {
      uuid: '382c8442-0d16-4996-a568-1439de830660',
      name: 'Situps',
      step: 1,
      goal: 20,
      resetEveryday: true,
      count: 30,
      last: second
    }
  ];
