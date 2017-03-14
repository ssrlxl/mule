import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgaModule} from '../../theme/nga.module';

import {Login} from './login.component';
import {routing}       from './login.routing';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {ToastyModule} from 'ng2-toasty';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    NgbAlertModule,
    ToastyModule.forRoot(),
    routing
  ],
  exports:[ToastyModule],
  declarations: [
    Login
  ]
})
export class LoginModule {
}
