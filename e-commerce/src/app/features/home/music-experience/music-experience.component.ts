import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-experience',
  templateUrl: './music-experience.component.html',
  styleUrls: ['./music-experience.component.scss']
})
export class MusicExperienceComponent implements OnInit {
  timer: any = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  ngOnInit(): void {
    this.startCountdown(new Date('2024-12-31T23:59:59'));
  }

  startCountdown(targetDate: Date): void {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      this.timer.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.timer.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.timer.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.timer.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }
}
