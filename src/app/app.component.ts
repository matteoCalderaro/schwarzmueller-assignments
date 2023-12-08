import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'assignments';
  oddNumbers: number[] = []
  evenNumbers: number[] = []

  onIntervalFired(event:number){
    if(event % 2 === 0){
      this.evenNumbers.push(event)
    }
    else {
      this.oddNumbers.push(event)
    }
  }

  ngOnInit(){
  }

}
