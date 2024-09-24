import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthSpecPage } from './auth-spec.page';

describe('AuthSpecPage', () => {
  let component: AuthSpecPage;
  let fixture: ComponentFixture<AuthSpecPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuthSpecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
