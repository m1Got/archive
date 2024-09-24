import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExecutorPage } from './executor.page';

describe('ExecutorPage', () => {
  let component: ExecutorPage;
  let fixture: ComponentFixture<ExecutorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExecutorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
