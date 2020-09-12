import { Injectable } from '@angular/core';
import { URL_SERVICE } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { CategoriasModelo } from '../modelos/categorias.model';

@Injectable({
  providedIn: 'any'
})
export class CategoriaService {

  constructor
  (
    public http:HttpClient
  ) {}

  obtenerCategorias()
  {
    let url = URL_SERVICE + 'category';
    return this.http.get(url);
  }

  agregarCategorias(categoria:CategoriasModelo)
  {
    let url = URL_SERVICE + 'category/create';
    return this.http.post(url, categoria);
  }

  modificarCategorias(categoria:CategoriasModelo)
  {
    let url = URL_SERVICE + 'category/modify/'+categoria._id;
    return this.http.put(url, categoria);
    
  }

  borrarCategorias(value)
  {
    let url = URL_SERVICE + 'category/delete/'+value;
    return this.http.delete(url)
  }

  
}
