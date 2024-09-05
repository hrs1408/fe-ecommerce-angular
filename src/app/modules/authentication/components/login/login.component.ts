import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {LoginServiceService} from '../../service/login-service.service';
import {Router} from '@angular/router';
import {setToken} from '../../../shared/functions/storage';
import {ToastServiceService} from '../../../shared/services/toast-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  validationMessage = {
    usermame: [
      {type: 'required', message: 'Email is required'},
    ],
    password: [{type: 'required', message: 'Password is required'}],
  };

  ngOnInit() {
    this.makeLoginForm();
  }

  constructor(
    private fb: FormBuilder,
    private loginService: LoginServiceService,
    private router: Router,
    private toastService: ToastServiceService
  ) {
  }

  makeLoginForm() {
    this.formLogin = this.fb.group({
      usermame: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    try {
      this.loginService
        .login(this.formLogin.value.usermame, this.formLogin.value.password)
        .subscribe(
          (res: any) => {
            setToken(res.data.token);
            this.toastService.setNotification({
              severity: 'success',
              summary: 'Success',
              detail: res.message,
            });
            this.router.navigate(['/']);
          },
          (error) => {
            console.log(error);
            this.toastService.setNotification({
              severity: 'error',
              summary: 'Error ' + error.error.status,
              detail: error.error.message,
            });
          }
        );
    } catch (error: any) {
      this.toastService.setNotification({
        severity: 'error',
        summary: 'Error ' + error.error.status,
        detail: error.error.error,
      });
    }
  }

  register() {
    this.router
      .navigate(['/auth/register'])
      .then((r) => console.log('navigated to register page'));
  }
}
