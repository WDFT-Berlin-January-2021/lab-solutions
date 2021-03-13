class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    var currentIndex = this.cards.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryValue;
  }
  }

  cardClicked (card) {
    console.log('Card clicked: ', card);
  
      this.pickedCards.push(card);
      this.flipCard(card);
      console.log('pickedCards.length: ', this.pickedCards.length);
  
    if (this.pickedCards.length == 2) {
      if (this.checkIfPair()){
        console.log("Test if game is finished");
       if (this.isFinished())prompt("Game finished");
      }
      else this.resetPickedCards();
    }
  }

  resetPickedCards() {
    console.log("flip both cards");
    setTimeout( () => {
    this.pickedCards.forEach(card => this.flipCard(card));
    this.pickedCards = [];
    }, 1000)
  }

  flipCard(card) {
    card.childNodes.forEach( child => {
    child.classList.toggle("back");
    console.log('Card flipped: ', child);
  })
  }

  checkIfPair() {
    if (this.pickedCards.length < 2) return;
    this.pairsClicked += 1;
    document.getElementById("pairs_clicked").innerText=this.pairsClicked;
    const card1 = this.pickedCards[0].getAttribute("data-card-name");
    const card2 = this.pickedCards[1].getAttribute("data-card-name");
    console.log("Pair?:"+card1+" "+card2);
    if (card1 === card2) {
      this.pairsGuessed += 1;
      document.getElementById("pairs_guessed").innerText=this.pairsGuessed;
      this.pickedCards = [];
      return true
    } else {
      console.log("no Pair");
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed == this.cards.length/2) return true;
    else return false
  }
}