import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphicComponent } from './graphic.component';


const routes: Routes = [{
  path: '',
  data: {
    title: 'Grafico'
  },
  children: [

    {
      path: '',
      component: GraphicComponent,
      data: {
        title: "Graficos"
      }
    }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class GraphicRoutingModule { }
