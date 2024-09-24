import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthPhonePage } from './auth-phone.page';

describe('AuthPhonePage', () => {
  let component: AuthPhonePage;
  let fixture: ComponentFixture<AuthPhonePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuthPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
