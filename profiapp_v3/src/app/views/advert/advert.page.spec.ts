import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertPage } from './advert.page';

describe('AdvertPage', () => {
  let component: AdvertPage;
  let fixture: ComponentFixture<AdvertPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdvertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
