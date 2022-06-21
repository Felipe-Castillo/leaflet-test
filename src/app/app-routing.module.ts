import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ElementInformationComponent } from './views/element-information/element-information.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'element-information',
    pathMatch: 'full',
  },
  {
    path: 'element-information',
    loadChildren: () => import('./views/element-information/element-information.module').then(m => m.ElementInformationModule),
    data: {
      allowed_roles: ['all'],
      animationState: 'element-information'

    }

  },
  {
    path: 'graphic',
    loadChildren: () => import('./views/graphic/graphic.module').then(m => m.GraphicModule),
    data: {
      allowed_roles: ['all'],
      animationState: 'graphic'

    }

  },
  { path: '**', component: ElementInformationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
