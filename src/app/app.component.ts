import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interview-prab';
  start() {
    console.log('Start Test');
  }
  handleEvent(event: any) {
    console.log('event', event);
  }
}
