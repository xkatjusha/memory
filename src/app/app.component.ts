import { Component } from '@angular/core';
import { RulesService } from './rules.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon';

  constructor(public rules: RulesService) {
    this.rules.shuffle();
  }
}
