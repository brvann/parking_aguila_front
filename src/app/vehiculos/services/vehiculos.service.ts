import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../models/vehiculos';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private urlApi:string = environment.apiUrl + "/vehiculos";
  private urlApiTipos:string = environment.apiUrl + "/tipos";

  constructor(private _httpClient:HttpClient) { }

  public getVehiculos():Observable<Array<Vehiculo>>{
    return this._httpClient.get<Array<Vehiculo>>(this.urlApi);
  }

  public getTipos():Observable<Array<Vehiculo>>{
    return this._httpClient.get<Array<Vehiculo>>(this.urlApiTipos);
  }
  
  public postVehiculo(vehiculo:Vehiculo):Observable<Vehiculo> {
    return this._httpClient.post<Vehiculo>(this.urlApi, vehiculo);
  }

  public postComienzaMes(): Observable<any> {
    return this._httpClient.post(`${this.urlApi}/tareas`, {});
  }
}
