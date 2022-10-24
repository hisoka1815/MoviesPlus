import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasModule } from '../peliculas/peliculas.module';

import { MainpageComponent } from './mainpage.component';

const routes: Routes = [
  {
    path: '', component: MainpageComponent, children: [

      { path: 'peliculas', loadChildren: () => import('../peliculas/peliculas.module').then(m => m.PeliculasModule) },
      { path: 'series', loadChildren: () => import('../series/series.module').then(m => m.SeriesModule) },
      { path: 'animes', loadChildren: () => import('../animes/animes.module').then(m => m.AnimesModule) },
     
     




    ]
   
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
