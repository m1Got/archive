import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthPersonalPage } from './auth-personal.page';

describe('AuthPersonalPage', () => {
  let component: AuthPersonalPage;
  let fixture: ComponentFixture<AuthPersonalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuthPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
