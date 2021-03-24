import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuardService as RoleGuard } from './security/app.role-guard.service';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AuthGuardService as AuthGuard} from './security/app.auth-guard.service';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
  
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate:[AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Welcome!'
        }
      },
      {
        path: 'cadastro',
        loadChildren: () => import('./views/cadastros/cadastro.module').then(m=> m.CadastroModule),
        canActivate: [RoleGuard],
        data: { 
          expectedRole: 'admin'
        } 
      },
    ]
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
