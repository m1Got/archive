import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllordersPage } from './allorders.page';

describe('AllordersPage', () => {
  let component: AllordersPage;
  let fixture: ComponentFixture<AllordersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
