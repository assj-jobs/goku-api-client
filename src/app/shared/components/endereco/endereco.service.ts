import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable()
export class EnderecoService {
    headers = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization' : 'Basic Y2xpZW50LWFrYm91OjkxNDE5YzQzZTIzMTMwOTgyMDI0NGVmZGQzZjBiNmQy'
      });
    
    constructor(private http: HttpClient){

    }

    recuperarEnderecoPorCep(cep: string): Observable<any> {
        const headers = this.headers;
        const params =  new HttpParams().set('cep', cep);
        return this.http.get(`${environment.GOKU_API}/api/address`, { headers, params });
    }
}