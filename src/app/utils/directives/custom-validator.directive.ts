import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn, FormGroup } from "@angular/forms";
import { Observable, switchMap, of, tap } from "rxjs";

export function formationNameValidator() : ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const error = {invalidName: {value: control.value}};

    if(control?.value.toLowerCase().includes('formation')) {
      return error;
    }
    return null
  }
}


export function crValidator(): ValidatorFn {
  return (fg: AbstractControl): ValidationErrors | null => {
    const has_error = fg.get('finished')?.value && !fg.get('cr')?.value;
    console.log('in validator');

    fg.get('cr')?.setErrors({'required': true});

    return has_error? {'required_cr': true}: null;
  }
}





