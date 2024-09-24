import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertisePage } from './advertise.page';

describe('AdvertisePage', () => {
  let component: AdvertisePage;
  let fixture: ComponentFixture<AdvertisePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdvertisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
