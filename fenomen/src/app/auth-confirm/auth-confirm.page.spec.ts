import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthConfirmPage } from './auth-confirm.page';

describe('AuthConfirmPage', () => {
  let component: AuthConfirmPage;
  let fixture: ComponentFixture<AuthConfirmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuthConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
