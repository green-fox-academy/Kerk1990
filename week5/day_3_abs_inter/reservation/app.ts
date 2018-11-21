import { Reservation } from "./Reservation";
function initializeArray(): Reservation[] {
  let rArray: Reservation[] = [];
  rArray.push(new Reservation);
  rArray.push(new Reservation);
  rArray.push(new Reservation);
  rArray.push(new Reservation);
  rArray.push(new Reservation);
  rArray.push(new Reservation);
  rArray.push(new Reservation);
  rArray.push(new Reservation);
  rArray.push(new Reservation);
  rArray.push(new Reservation);
  return rArray;
}
let reservationList: Reservation[] = initializeArray();
reservationList.forEach(e => {
  console.log(`Booking# ${e.getCodeBooking()} for ${e.getDowBooking()}`)
});
