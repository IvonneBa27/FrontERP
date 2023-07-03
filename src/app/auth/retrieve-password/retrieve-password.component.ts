import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-retrieve-password',
  templateUrl: './retrieve-password.component.html',
  styleUrls: ['./retrieve-password.component.css'],
})
export class RetrievePasswordComponent implements OnInit {
  passwordsNotMatch: boolean = false;
  isLoading: boolean = false;
  newPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
  ]);
  confirmPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
  ]);
  resetPasswordForm = this.fb.group(
    {
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword,
    },
    {
      validator: this.ConfirmedValidator('newPassword', 'confirmPassword'),
    }
  );
  constructor(private fb: FormBuilder, private _srvStorage: StorageService, private _srvAuth: AuthService) {}

  ngOnInit() {}

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  submitForm() {
    this.isLoading = true;
    const idUser = JSON.parse(this._srvStorage.get('user_id'));

    const body = {
      id: idUser,
      password: this.resetPasswordForm.controls['newPassword'].value,
    };
    this._srvAuth.retrievePassword(body).subscribe((res) => {
      if (res.status == 'success') {
        this.isLoading = false;
        swal.fire('Do It Right', res.msg, 'success');
      } else {
        swal.fire('Do It Right', res.msg, 'error');
        this.isLoading = false;
      }
    });
    // if (!this.resetPasswordForm?.valid) {
    //   return;
    // }
  }
}
