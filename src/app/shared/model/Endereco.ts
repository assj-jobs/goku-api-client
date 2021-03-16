export class Endereco {
    id          : number;
    cep         : number;
    logradouro  : string;
    bairro      : string;
    localidade  : string;
    estado      : string;
    numero      ?: number;
    complemento ?: string;
}