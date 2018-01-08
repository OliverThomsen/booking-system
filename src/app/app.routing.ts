import {RouterModule, Routes} from '@angular/router';
import {RoomListComponent} from './room-list/room-list.component';
import {RoomReservationComponent} from './room-reservation/room-reservation.component';

const APP_ROUTES: Routes = [
  {path: '', component: RoomListComponent, children: [
    {path: ':id', component: RoomReservationComponent}
  ]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
