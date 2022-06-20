import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddDataComponent } from './dialog-add-data.component';

describe('DialogAddDataComponent', () => {
  let component: DialogAddDataComponent;
  let fixture: ComponentFixture<DialogAddDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
