import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estancia } from 'src/app/estancias/models/estancia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private urlApi:string = environment.apiUrl + "/estancias";

  constructor(private _httpClient:HttpClient) { }

  public getEstancias():Observable<Array<Estancia>>{
    return this._httpClient.get<Array<Estancia>>(this.urlApi);
  }

  public postComienzaMes(): Observable<any> {
    return this._httpClient.post(`${this.urlApi}/tareas`, {});
  }
}
