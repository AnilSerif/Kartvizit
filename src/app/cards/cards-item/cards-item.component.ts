import { Component, Input, OnInit } from '@angular/core';
import { Cards } from '../model/cards';

@Component({
  selector: 'app-cards-item',
  templateUrl: './cards-item.component.html',
  styleUrls: ['./cards-item.component.css']
})
export class CardsItemComponent implements OnInit {

  @Input() Card!: Cards;

  constructor() { }

  ngOnInit(): void {
  }

}
