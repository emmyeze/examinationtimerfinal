import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  message: any[] = [];

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.currentMessage.subscribe((message) => {
      const temp = [];
      // message = [];
      if (message) {
        for (let i = 0; i < message.length; i++) {
          temp.push({
            hour: message[i][0],
            minute: message[i][1],
            second: message[i][2],
            courseName: message[i][3],
            index: message[i][4]
          })

        }
        this.message = temp;
      }
    });

    this.timerService.indexToRemove.subscribe((anIndex) => {
      if (anIndex !== -1) {
        this.message.splice(anIndex, 1);
        this.timerService.changeMessage(this.message);
        this.timerService.changeRemoveIndex(-1);

      }
    });
  }

  playAll(): void {
    this.timerService.changePlayMessage(true)
  }



}
