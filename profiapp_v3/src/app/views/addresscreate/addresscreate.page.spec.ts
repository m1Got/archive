import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddresscreatePage } from './addresscreate.page';

describe('AddresscreatePage', () => {
  let component: AddresscreatePage;
  let fixture: ComponentFixture<AddresscreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddresscreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
