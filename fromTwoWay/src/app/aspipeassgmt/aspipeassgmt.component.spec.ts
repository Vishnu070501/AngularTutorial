import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspipeassgmtComponent } from './aspipeassgmt.component';

describe('AspipeassgmtComponent', () => {
  let component: AspipeassgmtComponent;
  let fixture: ComponentFixture<AspipeassgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspipeassgmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspipeassgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
