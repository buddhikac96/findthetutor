import { FormControl } from '@angular/forms';

export function PasswordValidator(confirmPasswordInput: string) {
  let confirmPasswordControl: FormControl;
  let passwordControl: FormControl;

  return (control: FormControl) => {
    if (!control.parent) {
      return null;
    }

    if (!confirmPasswordControl) {
      confirmPasswordControl = control;
      passwordControl = control.parent.get(confirmPasswordInput) as FormControl;
      passwordControl.valueChanges.subscribe(() => {
        confirmPasswordControl.updateValueAndValidity();
      });
    }

    if (
      passwordControl.value !==
      confirmPasswordControl.value
    ) {
      return {
        notMatch: true
      };
    }
    return null;
  };
}
