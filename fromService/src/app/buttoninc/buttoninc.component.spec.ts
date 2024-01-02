import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonincComponent } from './buttoninc.component';

describe('ButtonincComponent', () => {
  let component: ButtonincComponent;
  let fixture: ComponentFixture<ButtonincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonincComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
