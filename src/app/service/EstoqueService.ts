import {Injectable} from "@angular/core";
import EndPoint from "../components/constant/EndPoint";
import EstoqueRequest from "../DTO/request/EstoqueRequest";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export default class EstoqueService {

  constructor() {
  }

  public getTodos(): Promise<Array<EstoqueRequest>> {
    return fetch(`${EndPoint.ESTOQUE}`)
    .then(response => {
      return response.json() as unknown as Array<EstoqueRequest>;
    })
  }
}
