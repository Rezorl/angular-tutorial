import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskWithServiceComponent } from './add-task-with-service.component';

describe('AddTaskWithServiceComponent', () => {
  let component: AddTaskWithServiceComponent;
  let fixture: ComponentFixture<AddTaskWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskWithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
