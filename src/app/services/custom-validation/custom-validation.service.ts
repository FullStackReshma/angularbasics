import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor(private http:HttpClient) { }
  passwordMatchValidator(password:string,confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password]
      const confirmPasswordControl = formGroup.controls[confirmPassword]

      if(!passwordControl || !confirmPasswordControl) {
        return null
      }

      if(
        confirmPasswordControl.errors && 
        !confirmPasswordControl.errors['passwordMismatch']) {
          return null
      }

      if(passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({passwordMismatch :true})
      }else {
        confirmPasswordControl.setErrors(null);
      }
    }

  }

  // validateUsernameNotTaken() {
  //   return this.checkUsernameNotTaken(control.value).pipe()
  // }
  // checkUsernameNotTaken(username: string) {
  //   return this.http.get('assets/fakedb.json').pipe(
  //     map((usernameList: Array<any>) => usernameList.filter(user.username === username)
  //     ),
  //     map(users => !users.length)
  //   )
  // }
}
