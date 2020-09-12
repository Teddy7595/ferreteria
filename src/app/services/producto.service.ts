import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';
import { ProductoModelo } from '../modelos/productos.models';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor
  (
    public http:HttpClient
  ) { }

  obtenerProductos()
  {
    let url = URL_SERVICE + 'products';
    return this.http.get(url);
  }

  guardarProductos(producto:ProductoModelo)
  {
    let url = URL_SERVICE + 'products/create';
    return this.http.post(url,producto);
  }

  borrarProductos(_id:string)
  {
    let url = URL_SERVICE + 'products/delete/'+_id;
    return this.http.delete(url);
  }

  modificarProductos(_id:string, producto:ProductoModelo)
  {
    let url = URL_SERVICE + 'products/modify/'+_id;
    return this.http.put(url, producto);
  }
}
