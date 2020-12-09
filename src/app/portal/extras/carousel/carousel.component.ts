import { Component, OnInit } from '@angular/core';
import { imagesArray } from '../../components/home/images';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  // Variable global
  images: any = imagesArray;

  constructor() { }

  ngOnInit(): void {
  }

}
