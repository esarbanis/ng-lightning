import {TestBed, ComponentFixture}  from '@angular/core/testing';
import {Component} from '@angular/core';
import {createGenericTestComponent} from '../../test/util/helpers';
import {NglButtonsModule} from './module';
import {NglIconsModule} from '../icons/module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getButtonElement(element: Element): HTMLButtonElement {
  return <HTMLButtonElement>element.querySelector('button');
}

describe('`nglButton`', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglButtonsModule, NglIconsModule]}));

  it('should render the default button', () => {
    const fixture = createTestComponent();
    const button = getButtonElement(fixture.nativeElement);
    expect(button).toHaveCssClass('slds-button');
  });

  it('should render icon correctly', () => {
    const fixture = createTestComponent(`<button ngl-button [variant]="style" iconName="download" iconPosition="left">Download</button>`);
    const button = getButtonElement(fixture.nativeElement);
    const icon = button.querySelector('svg');
    expect(icon).toHaveCssClass('slds-button__icon');
    expect(icon).toHaveCssClass('slds-button__icon_left');
  });

  it('should render dynamic style', () => {
    const fixture = createTestComponent();
    const { componentInstance } = fixture;

    const button = getButtonElement(fixture.nativeElement);
    expect(button).toHaveCssClass('slds-button');
    expect(button).toHaveCssClass('slds-button_brand');

    componentInstance.style = 'destructive';
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-button');
    expect(button).toHaveCssClass('slds-button_destructive');
    expect(button).not.toHaveCssClass('slds-button_brand');

    componentInstance.style = null;
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-button');
    expect(button).not.toHaveCssClass('slds-button_destructive');
    expect(button).not.toHaveCssClass('slds-button_brand');
  });
});


@Component({
  template: `<button ngl-button [variant]="style">Go <</button>`,
})
export class TestComponent {
  style: string = 'brand';
  size: string;
}
