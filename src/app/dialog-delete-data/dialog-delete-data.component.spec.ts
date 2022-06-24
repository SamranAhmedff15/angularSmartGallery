import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteDataComponent } from './dialog-delete-data.component';

describe('DialogDeleteDataComponent', () => {
  let component: DialogDeleteDataComponent;
  let fixture: ComponentFixture<DialogDeleteDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
