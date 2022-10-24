import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimesRoutingModule } from './animes-routing.module';
import { AnimesComponent } from './animes.component';


@NgModule({
  declarations: [
    AnimesComponent
  ],
  imports: [
    CommonModule,
    AnimesRoutingModule
  ]
})
export class AnimesModule { }
