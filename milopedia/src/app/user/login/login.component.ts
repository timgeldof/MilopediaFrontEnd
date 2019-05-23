import { AuthenticationService } from '../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < 8
      ? { passwordTooShort: { value: control.value.length } }
      : null;
  };
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: FormGroup;
  public errorMsg: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.user = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    this.authService
      .login(this.user.value.username, this.user.value.password)
      .subscribe(
      val => {
        if (val) {
          if (this.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
            this.authService.redirectUrl = undefined;
          } else {
            this.router.navigate(['/exercise/list']);
          }
        } else {
          this.errorMsg = `Could not login`;
        }
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        if (err.error instanceof Error) {
          this.errorMsg = `Login failed for ${
            this.user.value.username
            }`;
        } else {
          this.errorMsg = `Login failed for ${
            this.user.value.username
            }`;
        }
      }
      );
  }
}

