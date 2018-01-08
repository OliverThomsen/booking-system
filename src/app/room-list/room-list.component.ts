import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking/booking.service';
import {Room} from "../booking/room";
import {Building} from "../booking/building";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  private buildings: Building[];
  private currentBuilding: Building;
  date: Date;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.buildings = this.bookingService.getBuildings()
    this.currentBuilding = this.buildings[0];
    this.date = new Date();
    console.log(this.date);
    console.log(this.date.getDay()+" "+this.date.getFullYear()+" "+this.date.getMonth());
  }


}
