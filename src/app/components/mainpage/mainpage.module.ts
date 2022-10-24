import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { MainpageComponent } from './mainpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainpageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MainpageRoutingModule,
    SharedModule
  ]
})
export class MainpageModule { }
