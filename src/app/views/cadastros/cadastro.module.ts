import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteComponent } from './paciente/paciente.component';
import { FormsModule } from '@angular/forms';
import { CadastroRoutingModule } from './cadastro-routing.module';



@NgModule({
  declarations: [
    PacienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
