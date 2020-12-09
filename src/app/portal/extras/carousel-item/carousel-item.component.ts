import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {

  //función que deja pasar la información del padre
  @Input() item: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
