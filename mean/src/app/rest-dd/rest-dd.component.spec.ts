import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestDdComponent } from './rest-dd.component';

describe('RestDdComponent', () => {
  let component: RestDdComponent;
  let fixture: ComponentFixture<RestDdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestDdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
