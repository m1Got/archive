import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthCityPage } from './auth-city.page';

describe('AuthCityPage', () => {
  let component: AuthCityPage;
  let fixture: ComponentFixture<AuthCityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuthCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
