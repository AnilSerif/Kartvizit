import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardService } from '../Service/card.service';
import { CardModalComponent } from './card-modal/card-modal.component';
import { Cards } from './model/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  cards!:Cards[];

  constructor(public dialog: MatDialog,
    private cardservice:CardService) { }
  
  
  OpenCard():void{
    this.dialog.open(CardModalComponent)
  }

  getCards():void{this.cardservice.getCards()
    .subscribe((res:Cards[])=>{
      this.cards=res;
    });
  }

  ngOnInit(): void {
    this.getCards();
  }

}
