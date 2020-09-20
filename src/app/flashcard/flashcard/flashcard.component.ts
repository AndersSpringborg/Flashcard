import { Component, Input, OnInit } from '@angular/core';
import { flashcard } from '../models/flashcard';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css'],
  animations: [
    trigger('flip', [
      state('front', style({
        transform: 'rotateY(0deg)'
      })),
      state('back', style({
        transform: 'rotateY(180deg)'
      })),
      transition('front <=> back', [
        animate('1s ease-out', keyframes([
            style({transform: 'perspective(400px) rotateY(0deg)', offset: 0}),
            style({transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(80deg)', offset: 0.4}),
            style({transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(100deg)', offset: 0.5}),
            style({transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) rotateY(180deg)', offset: 0.8}),
            style({transform: 'perspective(400px) scale3d(1, 1, 1) rotateY(180deg)', offset: 1})
          ]))
      ]),
    ])
  ]
})
export class FlashcardComponent implements OnInit {
  @Input() flashcard : flashcard

  flipState = 'front';

  onFlipClick() {
    if (this.flipState == 'front') {
      this.flipState = 'back';
    } else {
      this.flipState = 'front';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
