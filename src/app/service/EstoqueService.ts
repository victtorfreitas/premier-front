import {Injectable} from "@angular/core";
import EndPoint from "../components/constant/EndPoint";
import EstoqueRequest from "../DTO/request/EstoqueRequest";

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

  getDadosBaseBy(idEstoque: number): Promise<EstoqueRequest> {
    return fetch(`${EndPoint.ESTOQUE}/${idEstoque}`)
    .then(response => {
        return response.json() as unknown as EstoqueRequest;
      }
    )
  }

  getProdutosById(idEstoque: number, numberPage: number): Promise<any> {
    let url = new URL(`${EndPoint.ESTOQUE}/${idEstoque}/produto`);
    let params = [['page', numberPage.toString()]];
    url.search = new URLSearchParams(params).toString();
    return fetch(url.toString())
    .then(response => {
        return response.json();
      }
    )
  }
}
