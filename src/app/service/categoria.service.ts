import {Injectable} from '@angular/core';
import EndPoint from "../components/constant/EndPoint";
import CategoriaRequest from "../DTO/request/categoria.request";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() {
  }

  public getAll(): Promise<Array<CategoriaRequest>> {
    return fetch(`${EndPoint.CATEGORIA}`)
    .then(response => {
      return response.json() as unknown as Array<CategoriaRequest>;
    })
  }
}
