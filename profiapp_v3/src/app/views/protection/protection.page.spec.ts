import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtectionPage } from './protection.page';

describe('ProtectionPage', () => {
  let component: ProtectionPage;
  let fixture: ComponentFixture<ProtectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProtectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
