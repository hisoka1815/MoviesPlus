import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimesComponent } from './animes.component';

const routes: Routes = [
  {path:'', component: AnimesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimesRoutingModule { }
