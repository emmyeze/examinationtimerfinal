import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private messageSource = new BehaviorSubject([]);
  private indexSource = new BehaviorSubject(-1);
  private playSource = new BehaviorSubject(false);
  // private play
  currentMessage = this.messageSource.asObservable();
  indexToRemove = this.indexSource.asObservable();
  generalPlay = this.playSource.asObservable();



  constructor() { }

  changeMessage(message: any[]) {
    this.messageSource.next(message)
  }

  changePlayMessage(message: boolean) {
    this.playSource.next(message)
  }

  changeRemoveIndex(message: number) {
    this.indexSource.next(message)
  }
}
