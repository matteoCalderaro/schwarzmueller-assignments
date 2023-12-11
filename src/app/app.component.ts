import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UsersService]
})
export class AppComponent{


  // onSetToInactive(index: number) {
  //   this.inactiveUsers.push(this.activeUsers[index]);
  //   this.activeUsers.splice(index, 1);
  // }

  // onSetToActive(index: number) {
  //   this.activeUsers.push(this.inactiveUsers[index]);
  //   this.inactiveUsers.splice(index, 1);
  //}
}
