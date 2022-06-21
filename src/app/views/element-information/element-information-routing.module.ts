import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementInformationComponent } from './element-information.component';



const routes: Routes = [{
  path: '',
  data: {
    title: 'Element'
  },
  children: [

    {
      path: '',
      component: ElementInformationComponent,
      data: {
        title: "Element"
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
export class ElementInformationRoutingModule { }
