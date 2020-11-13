export class Game {

    public pickCardAnimation = false;
    public currentCard: string = '';
    public players: string[] =[];
    public stack: string[]= [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        console.log(this.stack);

        for (let i=1; i<14; i++){
            this.stack.push('ace_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('diamonds_' + i);
        }
        shuffle(this.stack);
    }

    toJason () {
        return {
            players: this.players,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            pickCardAnimation: this.pickCardAnimation,
            currentCard: this.currentCard
        };
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}