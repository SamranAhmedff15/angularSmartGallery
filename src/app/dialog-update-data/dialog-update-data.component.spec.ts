import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateDataComponent } from './dialog-update-data.component';

describe('DialogUpdateDataComponent', () => {
  let component: DialogUpdateDataComponent;
  let fixture: ComponentFixture<DialogUpdateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
