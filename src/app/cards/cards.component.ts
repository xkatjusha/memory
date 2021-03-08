import { Component, Input} from '@angular/core';
import { RulesService } from '../rules.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() pic: string;
  poke: string;
  side:boolean;
  isActive:boolean;

  constructor(public rules: RulesService) {
    this.poke = " ";
    this.isActive=true;
    this.side=false;

    this.rules.allCards.push(this);

  }


  change() {
   if (this.side == false && this.rules.numberOfShownCards < 2) {
      this.side = true;
      this.poke = this.pic;
      this.rules.numberOfShownCards = this.rules.numberOfShownCards + 1;
      this.rules.shownCards.push(this.poke);
      this.rules.checkForPair();
      console.log('shown cards:', this.rules.shownCards);
    }
  }

}
