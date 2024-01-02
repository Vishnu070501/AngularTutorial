import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelincComponent } from './labelinc.component';

describe('LabelincComponent', () => {
  let component: LabelincComponent;
  let fixture: ComponentFixture<LabelincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelincComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
