import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListingsComponent } from './property-listings.component';

describe('PropertyListingsComponent', () => {
  let component: PropertyListingsComponent;
  let fixture: ComponentFixture<PropertyListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
