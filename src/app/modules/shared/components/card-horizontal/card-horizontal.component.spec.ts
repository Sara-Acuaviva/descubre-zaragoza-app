import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHorizontalComponent } from './card-horizontal.component';

describe('CardHorizontalComponent', () => {
  let component: CardHorizontalComponent;
  let fixture: ComponentFixture<CardHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardHorizontalComponent]
    });
    fixture = TestBed.createComponent(CardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
