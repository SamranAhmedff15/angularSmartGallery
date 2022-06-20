import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerToolbarComponent } from './drawer-toolbar.component';

describe('DrawerToolbarComponent', () => {
  let component: DrawerToolbarComponent;
  let fixture: ComponentFixture<DrawerToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
