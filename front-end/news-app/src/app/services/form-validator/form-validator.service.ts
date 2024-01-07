import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }

  passwordsMatchValidator(form : UntypedFormGroup) {
    const password = form.get('password')
    const confirmPassword = form.get('confirmPassword')
    
    if(password.value === confirmPassword.value) {
      confirmPassword.setErrors(null)
    } else {
      confirmPassword.setErrors({passwordsMisMatch: true}) //passing custom object
    }
    return null;
  }

}
