import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-productos-bodegon',
  templateUrl: './productos-bodegon.component.html',
  styles: [
  ]
})
export class ProductosBodegonComponent implements OnInit {

  constructor(public _categoriaSercivio:CategoriaService) { }

  ngOnInit(): void {
  }

}
