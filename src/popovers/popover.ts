import {Component, ChangeDetectionStrategy, ElementRef, Renderer} from 'angular2/core';
import {replaceClass} from '../util/util';

export type Direction = 'top' | 'right' | 'bottom' | 'left';

@Component({
  selector: 'ngl-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './popover.html',
})
export class NglPopover {

  set open(isOpen: boolean) {
    this.renderer.setElementClass(this.element.nativeElement, 'slds-hide', !isOpen);
  }

  private _nubbin: Direction;
  set nubbin(direction: Direction) {
    replaceClass(this, `slds-nubbin--${this._nubbin}`, direction ? `slds-nubbin--${direction}` : '');
    this._nubbin = direction;
  }

  constructor(public element: ElementRef, public renderer: Renderer) {
    this.renderer.setElementClass(this.element.nativeElement, 'slds-popover', true);
    this.open = false;
  }

}
