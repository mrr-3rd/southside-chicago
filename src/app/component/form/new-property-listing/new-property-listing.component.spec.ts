import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPropertyListingComponent } from './new-property-listing.component';

describe('NewPropertyListingComponent', () => {
  let component: NewPropertyListingComponent;
  let fixture: ComponentFixture<NewPropertyListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPropertyListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPropertyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
