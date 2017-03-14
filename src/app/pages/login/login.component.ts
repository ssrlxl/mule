import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {Account} from "./login.model";

import {ToastyConfig, ToastyService, ToastData, ToastOptions} from "ng2-toasty";

import 'style-loader!./login.scss';

import 'style-loader!ng2-toasty/style.css';
import 'style-loader!ng2-toasty/style-bootstrap.css';
import 'style-loader!ng2-toasty/style-default.css';
import 'style-loader!ng2-toasty/style-material.css';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})



export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(private toastyService: ToastyService,
              private toastyConfig: ToastyConfig,
              private  router: Router, fb: FormBuilder) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];

    this.toastyConfig.theme = "bootstrap";
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {

      // Or create the instance of ToastOptions
      var toastOptions: ToastOptions = {
        title: "登录",
        msg: "登录成功",
        showClose: true,
        timeout: 5000,
        theme: 'bootstrap',
        onAdd: (toast: ToastData) => {
          console.log('Toast ' + toast.id + ' has been added!');
        },
        onRemove: function (toast: ToastData) {
          console.log('Toast ' + toast.id + ' has been removed!');
        }
      };

      this.toastyService.info(toastOptions);
     this.router.navigate(['/pages/forms/inputs']);
    }
  }
}
