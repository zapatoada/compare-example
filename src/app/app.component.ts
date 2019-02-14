import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Make, allMakes} from './Make';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  makes: Make[] = allMakes;
  maxModelYear: number = new Date().getFullYear()+1;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
      lastNameCtrl: ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
      dobCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      vehicleYearCtrl: ['', Validators.compose([Validators.required, Validators.min(1970),Validators.max(this.maxModelYear)])],
      vehicleMakeCtrl: ['', Validators.required]
    });
    
  }
  title = 'compare-example';
}
