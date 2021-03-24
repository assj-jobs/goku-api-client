import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { EnderecoService } from './components/endereco/endereco.service';
import { TelefoneComponent } from './components/telefone/telefone.component';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        PerfectScrollbarModule
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
