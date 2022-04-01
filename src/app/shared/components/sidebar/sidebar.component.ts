import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  progressSubscription: Subscription;

  message: any[] = []
  hour: string = '00';
  min: string = '00';
  sec: string =  '00';
  course: string = '***111';
  index: number = -1;

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.progressSubscription = this.timerService.currentMessage.subscribe((message) =>
    {
      if (message) {
        this.message = message;
      console.log('progressmessage changed to::', this.message)

      }


    });

  }

  make2Dig(aNumber: number): string {
    let answer = aNumber.toString();
    if ((aNumber / 10) < 1) {
      answer = '0' + answer;
    }
    return answer;
  }

  increase(timeElement:number): void {
    if (timeElement === 1) {
      // if (parseInt(this.hour) === 0) {this.hour = '99'}
      if (parseInt(this.hour) === 99) {this.hour = '00'}
      else {
        this.hour = this.make2Dig(parseInt(this.hour) + 1);}
    }

    if (timeElement === 2) {
      // if (parseInt(this.min) === 0) {this.min = '60'}
      if (parseInt(this.min) === 60) {this.min = '00'}
      else {
        this.min = this.make2Dig(parseInt(this.min) + 1);}
    }

    if (timeElement === 3) {
      // if (parseInt(this.sec) === 0) {this.sec = '60'}
      if (parseInt(this.sec) === 60) {this.sec = '00'}
      else {
        this.sec = this.make2Dig(parseInt(this.sec) + 1);}
    }



  }

  decrease(timeElement:number): void {
    if (timeElement === 1) {
      if (parseInt(this.hour) === 0) {this.hour = '99'}

      else {
        this.hour = this.make2Dig(parseInt(this.hour) - 1);}
    }

    if (timeElement === 2) {
      if (parseInt(this.min) === 0) {this.min = '60'}
      else {
        this.min = this.make2Dig(parseInt(this.min) - 1);}
    }

    if (timeElement === 3) {
      if (parseInt(this.sec) === 0) {this.sec = '60'}
      else {
        this.sec = this.make2Dig(parseInt(this.sec) - 1);}
    }


  }

  addTimer(): void {
    this.message.push([this.hour,this.min,this.sec,this.course, true]);
    this.timerService.changeMessage(this.message);
    this.clear();

  }

  clear(): void {
    this.hour= '00';
    this.min = '00';
    this.sec =  '00';
    this.course = '***111';
  }

  reset(): void {
    this.clear();
    this.message = [];
    this.timerService.changeMessage(this.message);
  }

}
