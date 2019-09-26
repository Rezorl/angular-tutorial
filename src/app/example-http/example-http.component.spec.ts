import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleHttpComponent } from './example-http.component';

describe('ExampleHttpComponent', () => {
  let component: ExampleHttpComponent;
  let fixture: ComponentFixture<ExampleHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
