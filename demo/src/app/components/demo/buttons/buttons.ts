import {Component} from '@angular/core';

@Component({
  selector: 'demo-buttons',
  templateUrl: './buttons.html',
})
export class DemoButtons {

  selected: boolean = true;

  change() {
    this.selected = !this.selected;
  }
}
