import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyadvertsPage } from './myadverts.page';

describe('MyadvertsPage', () => {
  let component: MyadvertsPage;
  let fixture: ComponentFixture<MyadvertsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyadvertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
