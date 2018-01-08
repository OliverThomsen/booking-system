export class Room  {

  private timeIntervals: number[] = [8,9,10,11,12,13,14,15,16,17,18,19];

  constructor(public name: string,
              public bookings?: Date[]) {}

  public addBooking(datetime: Date): boolean {
    if (this.bookings.indexOf(datetime) == -1) {
      this.bookings.push(datetime);
      return true;
    }
    return false;
  }

  public getTimeIntervals(): number[] {
    return this.timeIntervals;
  }


}

