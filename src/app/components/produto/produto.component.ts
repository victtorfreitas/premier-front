import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  private route: ActivatedRoute;

  constructor(route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit(): void {
  }

  imprimirValores(): string {
    let id: string = '';
    this.route.params.subscribe(param => {
      id = param['id'];
    });
    return id;
  }
}
