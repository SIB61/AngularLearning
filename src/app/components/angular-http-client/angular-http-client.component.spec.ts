import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHttpClientComponent } from './angular-http-client.component';

describe('AngularHttpClientComponent', () => {
  let component: AngularHttpClientComponent;
  let fixture: ComponentFixture<AngularHttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularHttpClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
