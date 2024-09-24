import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertcreatePage } from './advertcreate.page';

describe('AdvertcreatePage', () => {
  let component: AdvertcreatePage;
  let fixture: ComponentFixture<AdvertcreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdvertcreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
