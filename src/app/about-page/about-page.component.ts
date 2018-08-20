import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import anime from 'animejs';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
