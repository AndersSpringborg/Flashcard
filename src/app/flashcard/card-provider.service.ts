import { Injectable } from '@angular/core';
import {flashcard} from "./models/flashcard";

@Injectable({
  providedIn: 'root'
})
export class CardProviderService {
  getCards(): flashcard[] {
    let cards = [];

    for (let i = 1; i < 30; i++){
      cards.push(new flashcard("title " + i.toString(), "her er spørgsmål nummer " + i.toString()));
    }

    return cards;
  }

  constructor() { }
}
