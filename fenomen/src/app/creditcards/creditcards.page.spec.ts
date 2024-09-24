import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditcardsPage } from './creditcards.page';

describe('CreditcardsPage', () => {
  let component: CreditcardsPage;
  let fixture: ComponentFixture<CreditcardsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreditcardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
