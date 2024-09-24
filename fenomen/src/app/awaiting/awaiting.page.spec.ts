import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwaitingPage } from './awaiting.page';

describe('AwaitingPage', () => {
  let component: AwaitingPage;
  let fixture: ComponentFixture<AwaitingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AwaitingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
