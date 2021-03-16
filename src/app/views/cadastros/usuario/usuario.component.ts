import { Component, ViewChild } from '@angular/core';
import { EnderecoComponent } from '../../../shared/components/endereco/endereco.component';
import { Endereco } from '../../../shared/model/Endereco';
import { Telefone } from '../../../shared/model/Telefone';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {

  @ViewChild(EnderecoComponent) enderecoComponent;
  @ViewChild(EnderecoComponent) telefoneComponent;
  enderecos: Endereco[] = new Array<Endereco>();
  telefones: Telefone[] = new Array<Telefone>();

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

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
    this.enderecos = this.enderecoComponent.enderecos;
    this.telefones = this.telefoneComponent.telefones;
    console.log(this.enderecos);
    console.log(this.telefones);
  }

}
