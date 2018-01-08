import {Room} from "./room";

export class Building {
  constructor(public name: string,
              public rooms: Room[]
  ) {}
}
