import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Make, allMakes } from './Make';

function dateMin(min: Date): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    let val = new Date(control.value);
    if (control.value !== undefined && (isNaN(val.getTime()) || val < min )) {
      return { 'dateMin': true };
    }
    return null;
  };
}

function dateMax(max: Date): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    let val = new Date(control.value);
    if (control.value !== undefined && (isNaN(val.getTime()) || val > max)) {
      return { 'dateMax': true };
    }
    return null;
  };
}

const endOfToday = new Date();
endOfToday.setHours(23, 59, 59, 999);

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
  maxModelYear: number = new Date().getFullYear() + 1;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', [Validators.required, Validators.maxLength(25)]],
      lastNameCtrl: ['', [Validators.required, Validators.maxLength(25)]],
      dobCtrl: ['', [Validators.required, dateMin(new Date(1900, 1, 1)), dateMax(endOfToday)]]
    });
    this.secondFormGroup = this._formBuilder.group({
      vehicleYearCtrl: ['', [Validators.required, Validators.min(1970), Validators.max(this.maxModelYear)]],
      vehicleMakeCtrl: ['', Validators.required]
    });

  }
  title = 'compare-example';
}
