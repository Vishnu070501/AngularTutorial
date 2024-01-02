import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTempComponent } from './in-temp.component';

describe('InTempComponent', () => {
  let component: InTempComponent;
  let fixture: ComponentFixture<InTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
