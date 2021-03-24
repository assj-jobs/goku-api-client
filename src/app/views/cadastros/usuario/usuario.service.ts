import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Usuario } from "../../../shared/model/Usuario";

@Injectable()
export class UsuarioService {
    headers = new HttpHeaders({
        'Content-Type':'application/json'
      });
    
    constructor(private http: HttpClient){

    }

    inserir(usuario: Usuario): Observable<any> {
        const headers = this.headers;
        return this.http.post(`${environment.GOKU_API}/api/user`, JSON.stringify(usuario), { headers });
    }i
}