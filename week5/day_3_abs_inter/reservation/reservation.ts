import { Reservationy } from './interdaceRes'
export class Reservation implements Reservationy {
  getDowBooking(): string {
    let DOW = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let randomDayIndex: number = Math.floor(Math.random() * DOW.length);
    let randomDay = DOW[randomDayIndex];
    return randomDay;
  }
  getCodeBooking(): string {
    let resCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    return resCode;
  }
}
let random = new Reservation()
