import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExecutorordersPage } from './executororders.page';

describe('ExecutorordersPage', () => {
  let component: ExecutorordersPage;
  let fixture: ComponentFixture<ExecutorordersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExecutorordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
