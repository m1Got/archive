import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthCodePage } from './auth-code.page';

describe('AuthCodePage', () => {
  let component: AuthCodePage;
  let fixture: ComponentFixture<AuthCodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuthCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
