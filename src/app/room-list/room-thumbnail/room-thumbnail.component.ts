import {Component, Input, OnInit} from '@angular/core';
import {Room} from "../../booking/room";

@Component({
  selector: 'app-room-thumbnail',
  templateUrl: './room-thumbnail.component.html',
  styleUrls: ['./room-thumbnail.component.css']
})
export class RoomThumbnailComponent implements OnInit {

  @Input() room: Room;
  @Input() date: Date;
  timeIntervals: number[];

  constructor() { }

  ngOnInit() {
    this.timeIntervals = this.room.getTimeIntervals();
  }

}
