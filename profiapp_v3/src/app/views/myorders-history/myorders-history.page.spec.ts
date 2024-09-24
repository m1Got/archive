import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyordersHistoryPage } from './myorders-history.page';

describe('MyordersHistoryPage', () => {
  let component: MyordersHistoryPage;
  let fixture: ComponentFixture<MyordersHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyordersHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
