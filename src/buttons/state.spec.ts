import {TestBed, ComponentFixture}  from '@angular/core/testing';
import {Component} from '@angular/core';
import {createGenericTestComponent} from '../../test/util/helpers';
import {NglButtonsModule} from './module';
import {NglIconsModule} from '../icons/module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getOnState(element: Element): HTMLElement {
  return <HTMLElement>element.querySelector('ngl-state-on');
}

function getOffState(element: Element): HTMLElement {
  return <HTMLElement>element.querySelector('ngl-state-off');
}

function getHoverState(element: Element): HTMLElement {
  return <HTMLElement>element.querySelector('ngl-state-hover');
}

function getIcon(element: Element): SVGElement {
  return <SVGElement>element.querySelector('svg');
}

describe('`ngl-state`', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglButtonsModule, NglIconsModule]}));

  function testState(name: string, getState: (element: Element) => HTMLElement, state: string, icon: string, label: string) {
    describe(name, () => {
      it('should render the selected state classes', () => {
        const fixture = createTestComponent(`<ngl-state-${name}>${label}</ngl-state-${name}>`);
        const stateElement = getState(fixture.nativeElement);
        expect(stateElement).toHaveCssClass(`slds-text-${state}`);
      });

      it('should render the icon at the left by default', () => {
        const fixture = createTestComponent(`<ngl-state-${name} iconName="${icon}">${label}</ngl-state-${name}>`);
        const stateElement = getState(fixture.nativeElement);
        expect(stateElement).toHaveCssClass(`slds-text-${state}`);
        expect(getIcon(stateElement)).toHaveCssClass('slds-button__icon_stateful');
        expect(getIcon(stateElement)).toHaveCssClass('slds-button__icon_left');
      });

      it('should render the icon at the right', () => {
        const fixture = createTestComponent(`<ngl-state-${name} iconName="${icon}" iconPosition="right">${label}</ngl-state-${name}>`);
        const stateElement = getState(fixture.nativeElement);
        expect(stateElement).toHaveCssClass(`slds-text-${state}`);
        expect(getIcon(stateElement)).toHaveCssClass('slds-button__icon_stateful');
        expect(getIcon(stateElement)).toHaveCssClass('slds-button__icon_right');
      });
    });
  }

  testState('on', getOnState, 'selected', 'check', 'Following');
  testState('off', getOffState, 'not-selected', 'add', 'Follow');
  testState('hover', getHoverState, 'selected-focus', 'close', 'Unfollow');

});


@Component({
})
export class TestComponent {
}
