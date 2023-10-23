import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent {
  minutes: number = 25;
  seconds: number = 0;
  isRunning: boolean = false;
  interval: any;

  startTimer() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          this.pauseTimer();
        }
      }
    }, 1000);
  }

  pauseTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  resetTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
    this.minutes = 25;
    this.seconds = 0;
  }
}