import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {

  index = 0;
  speed = 10000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '123'.split('').map((x, i) => {
    const num = i;
    console.log(i)
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `/assets/carousel${i}.jpg`,
    };
  });

  constructor() { }

  ngOnInit() {
  }

}
