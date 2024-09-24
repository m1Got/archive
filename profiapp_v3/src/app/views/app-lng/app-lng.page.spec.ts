import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppLngPage } from './app-lng.page';

describe('AppLngPage', () => {
  let component: AppLngPage;
  let fixture: ComponentFixture<AppLngPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppLngPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
