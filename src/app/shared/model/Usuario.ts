import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";

export class Usuario {
    email: string;
    nome: string;
    senha: string;
    snAtivo: number;
    enderecos: Array<Endereco>;
    telefones: Array<Telefone>;
}