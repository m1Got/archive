import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertimagesPage } from './advertimages.page';

describe('AdvertimagesPage', () => {
  let component: AdvertimagesPage;
  let fixture: ComponentFixture<AdvertimagesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdvertimagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
