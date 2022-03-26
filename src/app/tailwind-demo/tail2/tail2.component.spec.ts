import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tail2Component } from './tail2.component';

describe('Tail2Component', () => {
  let component: Tail2Component;
  let fixture: ComponentFixture<Tail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tail2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
