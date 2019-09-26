import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodstawyComponent } from './podstawy.component';

describe('PodstawyComponent', () => {
  let component: PodstawyComponent;
  let fixture: ComponentFixture<PodstawyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodstawyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodstawyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
