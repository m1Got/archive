import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppCategoryPage } from './app-category.page';

describe('AppCategoryPage', () => {
  let component: AppCategoryPage;
  let fixture: ComponentFixture<AppCategoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
