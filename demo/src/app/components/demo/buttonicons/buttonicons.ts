import {Component} from '@angular/core';

@Component({
  selector: 'demo-buttonicons',
  templateUrl: './buttonicons.html',
})
export class DemoButtonIcons {

  selected: boolean = true;
  iconType: string = 'border';
  sizes: string[] = ['x-small', 'small', 'large'];

  change() {
    this.selected = !this.selected;
    this.iconType = this.iconType === 'border' ? 'container' : 'border';
  }
}
