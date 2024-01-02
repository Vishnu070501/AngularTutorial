import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimdfComponent } from './regimdf.component';

describe('RegimdfComponent', () => {
  let component: RegimdfComponent;
  let fixture: ComponentFixture<RegimdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegimdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegimdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
