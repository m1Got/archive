import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthRegPage } from './auth-reg.page';

describe('AuthRegPage', () => {
  let component: AuthRegPage;
  let fixture: ComponentFixture<AuthRegPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuthRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
