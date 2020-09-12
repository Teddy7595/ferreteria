import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { CategoriasModelo } from '../modelos/categorias.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-categorias',
  templateUrl: './registro-categorias.component.html',
  styleUrls: ['./registro-categorias.component.sass']
})
export class RegistroCategoriasComponent implements OnInit {

  private subCategoria:   string;
  private categoriaModel: CategoriasModelo;
  Categorias:             object;
  forma:                  FormGroup;

  constructor
  (
    public _categoriaService:CategoriaService
  ) { }

  ngOnInit(): void 
  {
    this.onInit();
    this.forma = new FormGroup
    ({
      name:           new FormControl(null, Validators.required),
      departamento:   new FormControl(null, Validators.required)
    });
    
  }

  onInit()
  {
    let retorno = this._categoriaService.obtenerCategorias();
    retorno.subscribe
    (
      r =>{ try{ this.onLoad(r);}catch(e){console.error(e);}},
      e =>{ console.log(e);},
      ()  =>{ console.log('Llamada completada');}
    );
    
  }

  onEqual(categoria:CategoriasModelo)
  {
    let arr     = Object.keys(this.Categorias).map((k) => this.Categorias[k]);
    let result  = arr.filter
    (
      item => (item.name === categoria.name && item.department === categoria.department)
    );
      
    if(result.length >= 1)
    {
      this.onNofity(' ', 'info', {message: 'La categoria ya existe!'});
      return true;
    }

    return false;

  }

  onSubcategoryEqual(categoria:CategoriasModelo, subcategoria)
  {

    let result  = categoria._subCategory.filter
    (
      item => (item === subcategoria)
    );
      
    if(result.length >= 1)
    {
      this.onNofity(' ', 'info', {message: 'La subCategoria ya existe!'});
      return true;
    }

    return false;
  }

  onNofity(value, type, title)
  {
    Swal.fire
    ({
      title: title.message,
      text: value,
      icon: type
    })
  }

  onLoad(data){ this.Categorias = data.data;}

  capitalizeInput(name){return name.charAt(0).toUpperCase() + name.slice(1);}

  //Metodos de subcategorias
  onAddSubcategory(categoria:CategoriasModelo)
  {
    let nameSubcatg;
    
    Swal.fire({
      title:              'Agregar subcategoria',
      input:              'text',
      confirmButtonText:  'Añadir',
      cancelButtonColor:  '#d33',
      showCancelButton:   true,
      cancelButtonText:   'Cancelar'
      

    }).then((result) => 
    {
      if (result.isConfirmed) 
      {
        
        nameSubcatg = this.capitalizeInput(result.value);

        if (!this.onSubcategoryEqual(categoria, nameSubcatg)) 
        {
          categoria._subCategory.push(nameSubcatg);
          let apiResult = this._categoriaService.modificarCategorias(categoria);
          apiResult.subscribe
          (
            r => {this.onNofity(' ', 'success', r); this.onInit();},
            e => 
            {this.onNofity
              (
                ' ', 
                'warning', 
                {message: 'No se pudo añadir la nueva subCategoria =/'}
              ); 
              console.log(e);
            }
          );
        }  
      }
    });
  }

  onModifySubcategory(value:string, categoria:CategoriasModelo, index:number)
  {
    Swal.fire({
      title:              'Modificar subcategoria',
      input:              'text',
      inputValue:         value,
      cancelButtonColor:  '#d33',
      showCancelButton:   true,
      confirmButtonText:  'Modificar',
      cancelButtonText:   'Cancelar'

    }).then((result)=>
    {
      if(result.isConfirmed)
      {
        categoria._subCategory[index] = this.capitalizeInput(result.value);

        let resultApi = this._categoriaService.modificarCategorias(categoria);
        resultApi.subscribe
        (
          r => {this.onNofity(' ', 'success', {message: 'Subcategoría modificada!'}); this.onInit();},
          e => {this.onNofity(' ', 'warning', {message: 'No se pudo realizar la modificación =/'}); console.log(e);}
        );
      }
    }); 
  }

  onDeleteSubcategory(categoria:CategoriasModelo, index:number)
  {
    Swal.fire({
      title:              'Eliminar subcategoria',
      cancelButtonColor:  '#d33',
      showCancelButton:   true,
      confirmButtonText:  'Eliminar',
      cancelButtonText:   'Cancelar'
    }).then((result)=>
    {
      if(result.isConfirmed)
      {
        categoria._subCategory.splice(index,1);

        let resultApi = this._categoriaService.modificarCategorias(categoria);
        resultApi.subscribe
        (
          r => {this.onNofity(' ', 'success', {message: 'Subcategoría eliminada!'}); this.onInit();},
          e => {this.onNofity(' ', 'warning', {message: 'No se pudo realizar la eliminación =/'}); console.log(e);}
        );
      }
    });
    
  }
  
  //Metodos de categorias
  onRegistrerCategory()
  {
    let categoria = new CategoriasModelo
    (
      this.capitalizeInput(this.forma.value.name),
      [],
      this.forma.value.departamento
    );
    
    if(!this.onEqual(categoria))
    {
      let result = this._categoriaService.agregarCategorias(categoria);
      result.subscribe
      (
        r => {this.onNofity(' ', 'success', r); this.onInit();},
        e => {console.log(e);}
      );
    }

  }

  onModifyModal(categoria:CategoriasModelo)
  {
    this.forma.setValue
    ({
      name:         categoria.name,
      departamento: categoria.department
    });

    this.categoriaModel = categoria;
    
  }

  onModifyCateogry()
  {
    this.categoriaModel.name        = this.capitalizeInput(this.forma.value.name) || this.categoriaModel.name;
    this.categoriaModel.department  = this.forma.value.departamento || this.categoriaModel.department;

    console.log(this.categoriaModel);
    
    let result = this._categoriaService.modificarCategorias(this.categoriaModel);
    result.subscribe
    (
      r => {this.onNofity(' ', 'success', r); this.onInit();},
      e => {this.onNofity(' ', 'warning', {message: 'No se pudo realizar la modificación =/'}); console.log(e);}
    );
    
    this.forma.setValue
    ({
      name:         null,
      departamento: null
    });
    
  }

  onDeleteCategory(_id)
  {
    Swal.fire({
      title:              'Estas seguro?',
      text:               "Puedes restaurarlo posteriormente de la papelera de reciclaje",
      icon:               'warning',
      showCancelButton:   true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor:  '#d33',
      confirmButtonText:  'Si, elimínalo',
      cancelButtonText:   'Cancelar'

    }).then((result) => 
    {
      let resultAPI = null;
      if (result.value) 
      {
        resultAPI = this._categoriaService.borrarCategorias(_id);
        resultAPI.subscribe
        (
          r => {this.onNofity(' ', 'success', r); this.onInit();},
          e => {this.onNofity(' ', 'warning', e); this.onInit();},
          ()=> {console.log('complete');}
        );
        
      }
    })
    
  }

}
