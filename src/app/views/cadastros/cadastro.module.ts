import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { SharedModule } from '../../shared/shared.module';
import { UsuarioService } from './usuario/usuario.service';

@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    FormsModule,
    CadastroRoutingModule,
    SharedModule
  ],
  providers: [
    UsuarioService
  ]
})
export class CadastroModule { 
  
}
