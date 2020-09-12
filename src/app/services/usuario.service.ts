import { Injectable } from '@angular/core';
import { UsuarioModelo } from '../modelos/usuarios.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(public http:HttpClient) 
  { 
    console.log('Servicio de usuario');
    
  }

  crearUsuario(usuario:UsuarioModelo)
  {
    let url = URL_SERVICE + 'user/create';

    return this.http.post(url, usuario);
  }

}
