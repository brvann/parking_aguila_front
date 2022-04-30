import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Estancia } from '../models/estancia';

@Injectable({
  providedIn: 'root'
})
export class EstanciasService {

  private urlApi:string = environment.apiUrl + "/estancias";

  constructor(private _httpClient:HttpClient) { }

  public getEstancias():Observable<Array<Estancia>>{
    return this._httpClient.get<Array<Estancia>>(this.urlApi);
  }

  public postEstancia(estancia:Estancia): Observable<Estancia> {
    return this._httpClient.post<Estancia>(this.urlApi, estancia);
  }
}
