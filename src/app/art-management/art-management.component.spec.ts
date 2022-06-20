import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtManagementComponent } from './art-management.component';

describe('ArtManagementComponent', () => {
  let component: ArtManagementComponent;
  let fixture: ComponentFixture<ArtManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
