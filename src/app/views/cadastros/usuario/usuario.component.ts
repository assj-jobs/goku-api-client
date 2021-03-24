import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnderecoComponent } from '../../../shared/components/endereco/endereco.component';
import { TelefoneComponent } from '../../../shared/components/telefone/telefone.component';
import { Endereco } from '../../../shared/model/Endereco';
import { Telefone } from '../../../shared/model/Telefone';
import { Usuario } from '../../../shared/model/Usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  @ViewChild(EnderecoComponent) enderecoComponent;
  @ViewChild(TelefoneComponent) telefoneComponent;
  usuario: Usuario = new Usuario();
  usuarioForm: FormGroup;

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  constructor(
    private formBuilder: FormBuilder, 
    private service: UsuarioService){

  }

  ngOnInit(){
    this.createForm();
  }

  createForm() {
    this.usuarioForm = this.formBuilder.group({
      id: this.formBuilder.control(''),
      email: this.formBuilder.control('', [Validators.required]),
      nome: this.formBuilder.control('', [Validators.required]),
      senha: this.formBuilder.control('', [Validators.required]),
      snAtivo: this.formBuilder.control('', [Validators.required])
    });
  }

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

  cadastrar(){
    this.usuario.email = this.usuarioForm.value.email;
    this.usuario.nome = this.usuarioForm.value.nome;
    this.usuario.senha = this.usuarioForm.value.senha;
    this.usuario.snAtivo = this.usuarioForm.value.snAtivo;
    this.usuario.enderecos = new Array<Endereco>();
    this.usuario.enderecos = this.enderecoComponent.enderecos;
    this.usuario.telefones = new Array<Telefone>();
    this.usuario.telefones = this.telefoneComponent.telefones;
    this.service.inserir(this.usuario)
    .subscribe(usuario => {
      this.usuario = usuario as Usuario;
      console.log(JSON.stringify(this.usuario));
  },
  error => {
    console.log("Error: " + error);
  });
  }

}
