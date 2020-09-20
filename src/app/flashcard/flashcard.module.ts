import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { flashcard } from './models/flashcard';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';
import {CardProviderService} from "./card-provider.service";


@NgModule({
  declarations: [FlashcardComponent, FlashcardListComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:
  [
    FlashcardComponent,
    FlashcardListComponent
  ],
  providers: [
    CardProviderService
  ]
})
export class FlashcardModule { }
