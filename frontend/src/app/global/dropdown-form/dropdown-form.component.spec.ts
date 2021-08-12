import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownFormComponent } from './dropdown-form.component';

describe('DropdownFormComponent', () => {
  let component: DropdownFormComponent;
  let fixture: ComponentFixture<DropdownFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
