import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component'


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Cadastro'
    },
    children: [
      {
        path: 'usuario',
        component: UsuarioComponent,
        data: {
          title: 'Usuários'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
