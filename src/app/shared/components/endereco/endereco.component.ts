import { Component, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { EventEmitter } from "events";
import { NgxSpinnerService } from "ngx-spinner";
import { Endereco } from "../../model/Endereco";
import { EnderecoService } from "./endereco.service";

@Component({
  selector: "app-endereco",
  templateUrl: "./endereco.component.html",
  styleUrls: ["./endereco.component.css"],
})
export class EnderecoComponent implements OnInit {

  enderecoForm: FormGroup
  endereco: Endereco
  @Output() enderecos: Endereco[] = new Array<Endereco>();
  
  public headers: any[] = [
      { "th": "CEP" },
      { "th": "LOGRADOURO" },
      { "th": "NÚMERO" },
      { "th": "COMPLEMENTO" },
      { "th": "BAIRRO" },
      { "th": "LOCALIDADE" },
      { "th": "ESTADO" },
      { "th": "AÇÃO" }
  ];
 
  constructor(
    private spinner: NgxSpinnerService, 
    private service: EnderecoService,
    private formBuilder: FormBuilder
  ) {} 

  ngOnInit(){
    this.createForm();
    this.enderecoForm.disable();
    this.enderecoForm.controls.cep.enable();
  }

  createForm() {
    this.enderecoForm = this.formBuilder.group({
      id: this.formBuilder.control(''),
      cep: this.formBuilder.control('', [Validators.required, this.validateCep]),
      logradouro: this.formBuilder.control('', [Validators.required]),
      numero: this.formBuilder.control('', [Validators.required]),
      bairro: this.formBuilder.control('', [Validators.required]),
      localidade: this.formBuilder.control('', [Validators.required]),
      estado: this.formBuilder.control('', [Validators.required]),
      complemento: this.formBuilder.control('', [Validators.required]),
    });
  }


  pesquisarPorCep(): void {
    var cep:string = this.enderecoForm.value.cep ? this.enderecoForm.value.cep.toString() : ""
    console.log("Cep: " + cep)
    if(cep.length == 8){
      this.spinner.show();
      this.service.recuperarEnderecoPorCep(cep)
      .subscribe(endereco => {
          this.endereco = endereco as Endereco;
          this.enderecoForm.setValue(this.endereco);
          this.enderecoForm.enable();
      },
      error => {
        console.log("Error: " + error);
      });
      this.spinner.hide();
    }
  }

  pesquisarPorEndereco(uf: string, municipio: string, logradouro: string): void {
    
  }

  adicionar(){
    if(this.endereco){
      this.endereco.numero = this.enderecoForm.value.numero ? this.enderecoForm.value.numero : 0;
      this.endereco.complemento = this.enderecoForm.value.complemento ? this.enderecoForm.value.complemento : "";
      this.enderecos.push(this.endereco);
      this.limparEndereco();
    }
  }

  remover(e:Endereco){
    this.enderecos.splice(this.enderecos.indexOf(e), 1);
  }

  limparEndereco(){
    this.endereco = undefined;
    this.enderecoForm.reset();
    this.enderecoForm.disable();
    this.enderecoForm.controls.cep.enable();
  }

  validateCep(c: FormControl) {
    if(!/^[0-9]*$/.test(c.value)){
      return {
        validateCep: {
          valid: false
        }
      } 
    }    
  }

};