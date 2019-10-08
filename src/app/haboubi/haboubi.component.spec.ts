import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaboubiComponent } from './haboubi.component';

describe('HaboubiComponent', () => {
  let component: HaboubiComponent;
  let fixture: ComponentFixture<HaboubiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaboubiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaboubiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
