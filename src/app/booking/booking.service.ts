import { Injectable } from '@angular/core';
import {Building} from './building';
import {Room} from "./room";

@Injectable()
export class BookingService {

  private buildings: Building[];

  constructor() {
    this.buildings = [
      new Building('Engineering Building', [
        new Room('ENG-1'),
        new Room('ENG-2'),
        new Room('ENG-3'),
        new Room('ENG-4'),
        new Room('ENG-5'),
        new Room('ENG-6'),
      ]),
      new Building('Science Building', [
        new Room('SCI-1'),
        new Room('SCI-2'),
        new Room('SCI-3'),
        new Room('SCI-4'),
        new Room('SCI-5'),
        new Room('SCI-6'),
      ]),
      new Building('Business Building', [
        new Room('BUS-1'),
        new Room('BUS-2'),
        new Room('BUS-3'),
        new Room('BUS-4'),
        new Room('BUS-5'),
        new Room('BUS-6'),
      ]),
      new Building('Humanities Building', [
        new Room('HUM-1'),
        new Room('HUM-2'),
        new Room('HUM-3'),
        new Room('HUM-4'),
        new Room('HUM-5'),
        new Room('HUM-6'),
      ])
    ];
  }

  public getBuildings(): Building[] {
    return this.buildings;
  }



}
