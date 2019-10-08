import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EX2Component } from './ex2.component';

describe('EX2Component', () => {
  let component: EX2Component;
  let fixture: ComponentFixture<EX2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EX2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EX2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
