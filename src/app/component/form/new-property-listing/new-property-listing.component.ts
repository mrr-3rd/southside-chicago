import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
// import { FormBuilder, FormGroup, Form } from "@angular/forms";

@Component({
  selector: 'app-new-property-listing',
  templateUrl: './new-property-listing.component.html',
  styleUrls: ['./new-property-listing.component.css']
})
export class NewPropertyListingComponent implements OnInit
{

  movies: any[] = null;
  public query: string;
  constructor() { }

  ngOnInit() { }

}
