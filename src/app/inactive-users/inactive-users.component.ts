import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{

  users: string[];


 
  constructor(private usersService : UsersService, private counterService: CounterService){
    
  }
  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers
  }

  onSetToActive(index: number) {
    this.usersService.setToActive(index)
  }
}
