import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CardModalComponent } from '../cards/card-modal/card-modal.component';
import { Cards } from '../cards/model/cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  
  
  //apiUrl:string ="http://demo.limantech.com/cards/public/api"
  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private http:HttpClient) { }

   getCards(){
    return this.http.get<Cards[]>(this.apiUrl + '/cards')
   } 
  
   addCard(card:Cards){
    return this.http.post(this.apiUrl + '/cards',card)
   }
}
