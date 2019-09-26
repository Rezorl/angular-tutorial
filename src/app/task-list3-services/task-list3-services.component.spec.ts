import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskList3ServicesComponent } from './task-list3-services.component';

describe('TaskList3ServicesComponent', () => {
  let component: TaskList3ServicesComponent;
  let fixture: ComponentFixture<TaskList3ServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskList3ServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskList3ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
