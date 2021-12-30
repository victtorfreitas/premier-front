import {Injectable} from '@angular/core';
import EndPoint from "../components/constant/EndPoint";
import {ProdutoRequest} from "../DTO/request/produto.request";
import ProdutoResponse from "../DTO/response/produto.response";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() {
  }

  getProdutoBy(id: number): Promise<ProdutoRequest> {
    return fetch(`${EndPoint.PRODUTO}/${id}`)
    .then(response => {
        return response.json() as unknown as ProdutoRequest;
      }
    )
  }

  salvar(id: number, produtoResponse: ProdutoResponse) {
    fetch(`${EndPoint.PRODUTO}/${id}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtoResponse)
      })
  }
}
