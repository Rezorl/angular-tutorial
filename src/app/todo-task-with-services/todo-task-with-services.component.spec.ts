import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskWithServicesComponent } from './todo-task-with-services.component';

describe('TodoTaskWithServicesComponent', () => {
  let component: TodoTaskWithServicesComponent;
  let fixture: ComponentFixture<TodoTaskWithServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTaskWithServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTaskWithServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
