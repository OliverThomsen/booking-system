import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomReservationComponent } from './room-reservation/room-reservation.component';
import { BookingService } from './booking/booking.service';
import { RoomThumbnailComponent } from './room-list/room-thumbnail/room-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    RoomReservationComponent,
    RoomThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
