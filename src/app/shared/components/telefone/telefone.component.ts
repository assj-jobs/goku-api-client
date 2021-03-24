import { Component, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Telefone } from "../../model/Telefone";

@Component({
    selector: "app-telefone",
    templateUrl: "./telefone.component.html"
  })
  export class TelefoneComponent implements OnInit {
  
    telefoneForm: FormGroup
    telefone: Telefone
    @Output() telefones: Telefone[] = new Array<Telefone>();

    cellPhonePattern = /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4,5}$/
    
    public headers: any[] = [
        { "th": "DDD" },
        { "th": "NÚMERO" },
        { "th": "ATIVO" },
        { "th": "AÇÃO" }
    ];
   
    constructor(
      private formBuilder: FormBuilder
    ) {} 
  
    ngOnInit(){
      this.createForm();
    }
  
    createForm() {
      this.telefoneForm = this.formBuilder.group({
        id: this.formBuilder.control(''),
        numero: this.formBuilder.control('', [Validators.required, Validators.pattern(this.cellPhonePattern)])
      });
    }
  
    adicionar(){
        if(this.telefoneForm.value.numero){
            var complete:string = this.telefoneForm.value.numero.toString();
            var numero:number = +complete.substring(2, complete.length);
            var ddd: number = +complete.substring(0, 2);
            this.telefone = new Telefone();
            this.telefone.ddd = ddd;
            this.telefone.numero = numero;
            this.telefone.snAtivo = 'S'
            this.telefones.push(this.telefone);
            this.limparTelefone();
        }
    }
  
    remover(t:Telefone){
      this.telefones.splice(this.telefones.indexOf(t), 1);
    }
  
    limparTelefone(){
      this.telefone = undefined;
      this.telefoneForm.reset();
    }

  };