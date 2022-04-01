import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timercontrols',
  templateUrl: './timercontrols.component.html',
  styleUrls: ['./timercontrols.component.scss']
})
export class TimercontrolsComponent implements OnInit {
  @Input() userMins: string;
  @Input() userSeconds: string;

  @Input() userHours: string;
  @Input() courseName: string;
  @Input() index: number ;
  toShow: boolean = true;
  edit: boolean = false;
  message: any[] = [];
  timeLeftSec: number = 60;
  timeLeftMins: number = 0;
  timeLeftHr: number = 0;
  interval: any;

  printMins: string = "00";
  printSeconds: string = "00";

  printHours: string = "00";

  progressSubscription: Subscription;
  tempTime: boolean = false;

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.progressSubscription = this.timerService.currentMessage.subscribe((message) =>
    {this.message = message;
    console.log('progressmessage changed to::', this.message)});


    this.timerService.generalPlay.subscribe((message) => {
      if (message) {
        // play me
        this.startTimer();
        this.timerService.changePlayMessage(false);
      }
    });
    this.printSeconds = (this.userSeconds);
    this.printMins = (this.userMins);
    this.printHours = (this.userHours);

  }

  make2Dig(aNumber: number): string {
    let answer = aNumber.toString();
    if ((aNumber / 10) < 1) {
      answer = '0' + answer;
    }
    return answer;
  }
  startTimer() {

    if (this.tempTime) {
      this.timeLeftSec = parseInt(this.printSeconds);
    this.timeLeftMins = parseInt(this.printMins);
    this.timeLeftHr = parseInt(this.printHours);
    this.tempTime = false;
    }

    else {
      this.timeLeftSec = parseInt(this.userSeconds);
    this.timeLeftMins = parseInt(this.userMins);
    this.timeLeftHr = parseInt(this.userHours);

    }



      this.interval = setInterval(() => {

       if (this.timeLeftSec > 0) {
         this.timeLeftSec-- ;
         this.printSeconds = this.make2Dig(this.timeLeftSec)
         this.printMins = this.make2Dig(this.timeLeftMins)
         this.printHours = this.make2Dig(this.timeLeftHr)

       }
       else {
         if (this.timeLeftMins > 0 || this.timeLeftHr > 0) {
           if(this.timeLeftMins > 0) {
             this.timeLeftMins --;
             this.timeLeftSec = 59;
             this.printSeconds = this.make2Dig(this.timeLeftSec)
             this.printMins = this.make2Dig(this.timeLeftMins)
             this.printHours = this.make2Dig(this.timeLeftHr)
           }
           else {
             this.timeLeftHr --;
             this.timeLeftMins = 59;
             this.timeLeftSec = 59;
             this.printSeconds = this.make2Dig(this.timeLeftSec)
             this.printMins = this.make2Dig(this.timeLeftMins)
             this.printHours = this.make2Dig(this.timeLeftHr)
           }

         }
         else {
           this.timeLeftSec = 0;
           this.printSeconds = '00'
         }
       }
      },1000)
    }

  pauseTimer() {

    this.printSeconds = this.make2Dig(this.timeLeftSec);
    this.printMins = this.make2Dig(this.timeLeftMins);
    this.printHours = this.make2Dig(this.timeLeftHr);
    this.tempTime = true;
    clearInterval(this.interval);



    }

    deleteTimer(): void {
      clearInterval(this.interval);
      this.toShow = false;
      this.timerService.changeRemoveIndex(this.index);


    }



  }



