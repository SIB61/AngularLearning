import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tail1Component } from './tail1.component';

describe('Tail1Component', () => {
  let component: Tail1Component;
  let fixture: ComponentFixture<Tail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tail1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
