import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { EnderecoService } from './components/endereco/endereco.service';
import { TelefoneComponent } from './components/telefone/telefone.component';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule, 
        ReactiveFormsModule
    ],
    declarations: 
    [
        EnderecoComponent,
        TelefoneComponent
    ],
    exports: [
        EnderecoComponent,
        TelefoneComponent,
        FormsModule, 
        ReactiveFormsModule
    ],
    providers: [
        EnderecoService
    ]
})
export class SharedModule {
    
}
