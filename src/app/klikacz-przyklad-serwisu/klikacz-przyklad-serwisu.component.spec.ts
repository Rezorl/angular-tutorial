import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlikaczPrzykladSerwisuComponent } from './klikacz-przyklad-serwisu.component';

describe('KlikaczPrzykladSerwisuComponent', () => {
  let component: KlikaczPrzykladSerwisuComponent;
  let fixture: ComponentFixture<KlikaczPrzykladSerwisuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlikaczPrzykladSerwisuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlikaczPrzykladSerwisuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
