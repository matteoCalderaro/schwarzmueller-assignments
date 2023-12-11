import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];

 
  
  constructor(private usersService: UsersService,private counterService:CounterService){
   
  }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers
  }

  onSetToInactive(index: number) {
    this.usersService.setToInactive(index)
  }
}
