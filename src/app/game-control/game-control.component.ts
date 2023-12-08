import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  lastNumber = 0
  interval:any

  @Output()
  intervalFired = new EventEmitter<number>()

  onStartGame(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber++)
      // console.log(this.lastNumber++)
    },1000)
  }

  onStopGame(){
    clearInterval(this.interval)
  }

}
