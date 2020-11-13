import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {

  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to drink at the same time. As soon as player 1 stops drinking'},
    { title: 'You', description: 'You decide who drinks'},
    { title: 'Me', description: 'Congrats! Drink a shot!'},
    { title: 'Category', description: 'Come up with a category, and players must add up an item, who cannot continue must drink!'},
    { title: 'Bust a jive', description: 'Players must add new dance moves and copy the previous ones, who cant remember the moves must drink!'},
    { title: 'Chicks', description: 'All girls drink'},
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!'},
    { title: 'Mate', description: 'Pick a mate, you both have to drink when the other one does!'},
    { title: 'Thumbmaster', description: ''},
    { title: 'Dicks', description: 'All men drink!'},
    { title: 'Quizmaster', description: 'As a question, first to answer chooses who drinks!'},
    { title: 'Never have I ever...', description: 'Say something you have done, who also has done that must drink!'},
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when someone breaks the rule!'}
  ];

  title = '';
  description = '';
  
  @Input() card: string;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if(this.card){
      console.log("Current card is:", this.card);
      console.log("Current number is:", this.card.split('_')[1]);

      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }

}
