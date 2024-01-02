import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributedirectComponent } from './attributedirect.component';

describe('AttributedirectComponent', () => {
  let component: AttributedirectComponent;
  let fixture: ComponentFixture<AttributedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributedirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
