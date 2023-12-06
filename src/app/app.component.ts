import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: '.white-text {color:white}'
})
export class AppComponent {
  showSecret = false

  clicks:any[] = []


  onToggle(){
    this.showSecret= !this.showSecret
    this.clicks.push(this.clicks.length+1)
    // this.clicks.push(new Date)
  }
}
