import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';

import {routing}       from './pages.routing';
import {NgaModule} from '../theme/nga.module';

import {Pages} from './pages.component';

import {ToastyModule} from 'ng2-toasty';

@NgModule({
  imports: [CommonModule, NgaModule, routing,
    ToastyModule.forRoot()
  ],
  declarations: [Pages]
})
export class PagesModule {
}
