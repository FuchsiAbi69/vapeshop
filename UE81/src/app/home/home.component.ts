import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {tastes} from '../shared/product.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  protected currentTaste: tastes;

  constructor() {
    this.currentTaste = tastes.WATERMELON;
  }

  isActive(taste: tastes): String {
    if (taste == this.currentTaste)
      return "active";

    return "";
  }

  protected readonly tastes = tastes;

  setTaste(taste: tastes) {
    this.currentTaste = taste;
  }

  getImg(): String {
    switch (this.currentTaste){
      case tastes.WATERMELON: return "img/tastes/watermelon.jpg"
      case tastes.BLUEBERRY: return "img/tastes/blueberry.jpg"
      case tastes.CHERRY: return "img/tastes/cherry.jpg"
      case tastes.GRAPE: return "img/tastes/grape.jpg"
      default: return "";
    }
  }
}
