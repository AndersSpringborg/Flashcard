import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { flashcard } from '../models/flashcard';
import {CardProviderService} from "../card-provider.service";

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlashcardListComponent implements OnInit {
  listOfCards : flashcard[]

  constructor(private cardProvider: CardProviderService) { }

  ngOnInit(): void {
    this.listOfCards = this.cardProvider.getCards();
  }

}
