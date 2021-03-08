import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  pokemon: string[];
  p1: string = "assets/images/pokemon1.jpg";
  p2: string = "assets/images/pokemon2.jpg";
  p3: string = "assets/images/pokemon3.jpg";
  p4: string = "assets/images/pokemon4.jpg";
  p5: string = "assets/images/pokemon5.jpg";
  p6: string = "assets/images/pokemon6.jpg";
  p7: string = "assets/images/pokemon7.jpg";
  p8: string = "assets/images/pokemon8.jpg";
  p9: string = "assets/images/pokemon9.jpg";
  p10: string = "assets/images/pokemon10.jpg";
  p11: string = "assets/images/pokemon11.jpg";
  p12: string = "assets/images/pokemon12.jpg";
  p13: string = "assets/images/pokemon13.jpg";
  p14: string = "assets/images/pokemon14.jpg";
  p15: string = "assets/images/pokemon15.jpg";
  numberOfShownCards: number;
  shownCards: string[];
  allCards: any[];

  constructor() {
    this.pokemon = [this.p1, this.p1,
    this.p2, this.p2,
    this.p3, this.p3,
    this.p4, this.p4,
    this.p5, this.p5,
    this.p6, this.p6,
    this.p7, this.p7,
    this.p8, this.p8,
    this.p9, this.p9,
    this.p10, this.p10,
    this.p11, this.p11,
    this.p12, this.p12,
    this.p13, this.p13,
    this.p14, this.p14,
    this.p15, this.p15];
    this.numberOfShownCards = 0;
    this.shownCards = [];
    this.allCards = [];
  }

  shuffle() {
    this.pokemon = this.pokemon.sort(() => Math.random() - 0.5);
  }

  checkForPair() {
    if (this.numberOfShownCards === 2) {
      if (this.shownCards[0] === this.shownCards[1]) {
        console.log('karten sind gleich');
        for (const cards of this.allCards) {
          if (cards.poke === this.shownCards[0]) {
            cards.isActive = false;
          }
        }
      } else {
        console.log('karten sind NICHT gleich');
      }
    }
  }

  returncard() {
    for (const cards of this.allCards) {
      cards.side = false;
    }
    this.shownCards = [];
    this.numberOfShownCards = 0;
  }



}
