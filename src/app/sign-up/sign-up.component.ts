import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation/custom-validation.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private fb: FormBuilder, private customValidator:CustomValidationService) { }

  userForm = this.fb.group({
    username: ['', [Validators.required,Validators.minLength(5)]],
    password: ['',Validators.required],
    confirmPassword: ['',Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    daysAvailable:this.fb.array([this.fb.control("")])
  },{
    validator:this.customValidator.passwordMatchValidator("password","confirmPassword")
  });

  addDay() {
    this.daysAvailable.push(this.fb.control(""))
  }

  get daysAvailable() {
    return this.userForm.get("daysAvailable") as FormArray
  }

  get username() {
    return this.userForm.get("username")
  }

  stateOptions: string[] = ["AP", "KL", "TM"]
  userAddressInfo: any = {
    street: "1234 Main st",
    city: "my city",
    state: this.stateOptions[0],
    zip: "12345",
  }

  

  ngOnInit(): void {
  }

  clear() {
    this.userForm.reset();
    //this.username.setValue(""); 
  }

  autoFillAddress() {
    this.userForm.patchValue({
      address: {
        street: this.userAddressInfo.street,
        city: this.userAddressInfo.city,
        state: this.userAddressInfo.state,
        zip: this.userAddressInfo.zip,
      }
    })
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

}
