import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy
} from '@angular/core';

import anime from 'animejs';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomePageComponent implements OnInit, AfterViewInit {
  public topics: any[] = ['JavaScript', 'Python', 'NodeJS', 'IoT'];
  public currentTopic: number;
  public letters: string[];

  constructor() {}

  ngOnInit() {
    this.currentTopic = Math.round(Math.random() * (this.topics.length - 1));
    this.letters = this.topics[this.currentTopic].split('');
  }

  ngAfterViewInit() {
    this.animateTopic();
  }

  public animateTopic() {
    const self = this;
    anime.timeline({ loop: false }).add({
      targets: '.ml6 .letter',
      translateY: ['1.1em', 0],
      translateZ: 0,
      duration: 750,
      delay: function(el, i) {
        return 50 * i;
      }
    });
  }
}
