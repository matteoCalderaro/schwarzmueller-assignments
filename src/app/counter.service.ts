import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class CounterService {

  activeToInactive: number = 0
  inactiveToActive: number = 0


  incrementActiveToInactive(){
    this.activeToInactive++
    console.log('Active to Inactive', this.activeToInactive)
    
  }

  incrementInactiveToActive(){
    this.inactiveToActive++
    console.log('Inactive to Active', this.inactiveToActive)

  }


}