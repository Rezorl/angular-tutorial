import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTaskWithServiceComponent } from './done-task-with-service.component';

describe('DoneTaskWithServiceComponent', () => {
  let component: DoneTaskWithServiceComponent;
  let fixture: ComponentFixture<DoneTaskWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneTaskWithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneTaskWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
