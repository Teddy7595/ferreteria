import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductoModelo } from '../modelos/productos.models';
import { CategoriaService } from '../services/categoria.service';
import { CategoriasModelo } from '../modelos/categorias.model';
import Swal from 'sweetalert2';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FomularioComponent implements OnInit {

  forma:                FormGroup;
  Catgforma:            FormGroup;
  Categorias:           Array<CategoriasModelo>;
  Productos:            Array<any>;
  subCategory:          Array<string>;
  isDisabled:           boolean;
  @Input() titulo:      string;
  @Input() tipo:        String;
  category:             Array<string>;
  sbCategory:           Array<string>;
  private imageProdt:   Array<string>;
  private auxProdcut:   ProductoModelo;
  


  constructor
  (
    public _categoria:CategoriaService,
    public _producto:ProductoService
  ) {}

  ngOnInit(): void 
  {
    console.log('Tipo de formulario: ', this.tipo);
    this.category     = new Array();
    this.subCategory  = new Array();
    this.sbCategory  = new Array();
    this.imageProdt   = new Array();
    this.isDisabled   = true;
    this.onInit();

    this.forma = new FormGroup
    ({
      name:           new FormControl(null, Validators.required),
      presentacion:   new FormControl(null, Validators.required),
      id_producto:    new FormControl(null, Validators.required),
      unidad:         new FormControl(null, Validators.required),
      descripcion:    new FormControl(null, Validators.required),
      marca:          new FormControl(null, Validators.required),
      cantidad:       new FormControl(null, Validators.required),
      bulto:          new FormControl(null, Validators.required),
      precio_unit:    new FormControl(null, Validators.required),
      precio_multi:   new FormControl(null, Validators.required),
      descuento_prec: new FormControl(null, Validators.required),
      descuento_cant: new FormControl(null, Validators.required),
    });

    this.Catgforma = new FormGroup
    ({
      categoria:      new FormControl(null, Validators.required),
      subCategoria:   new FormControl(null, Validators.required)

    });
    
    this.forma.setValue
    ({
      name:           'DDDDDDDD',
      presentacion:   'DDDDDDDD',
      id_producto:    'DDDDDDDD',
      unidad:         'DDDDDDDD',
      descripcion:    'DDDDDDDD',
      marca:          'DDDDDDDD',
      cantidad:       12345,
      bulto:          12345.265,
      precio_unit:    12345.265,
      precio_multi:   12345.265,
      descuento_prec: 12345.265,
      descuento_cant: 12345,
    });
    
  }

  ngOnDestroy(): void {}

  onNofity(value, type, title)
  {
    Swal.fire
    ({
      title: title.message,
      text: value,
      icon: type
    })
  }

  capitalizeInput(name){return name.charAt(0).toUpperCase() + name.slice(1);}

  onInit()
  {
    let result = this._categoria.obtenerCategorias();
    result.subscribe
    (
      r=>{ let aux:any = r; this.filterTypeCategory(aux.data);  },
      e => this.onNofity(null, 'warning', {message: 'No se ha podido extraer los datos del registro'})
    );

    this.onGettingProducts();
  }

  filterTypeCategory(categorias:any)
  {
    let aux;

    this.Categorias = categorias;
    
    if (this.tipo === '1') 
    {
      aux = this.Categorias.filter((r)=>{ return r.department === 'Ferreteria'});
    }

    if (this.tipo === '2') 
    {
      aux = this.Categorias.filter((r)=>{ return r.department === 'Bodegon'});
    }

    this.Categorias = aux;
    
  }

  onGettingProducts()
  {
    let result = this._producto.obtenerProductos();
    result.subscribe
    (
      r=>{ let aux:any = r; this.filterTypeProduct(aux.data);  console.log(this.Productos)}
    );
  }

  filterTypeProduct(productos:any)
  {
    let aux;

    this.Productos = productos;
    
    if (this.tipo === '1') 
    {
      this.Productos = this.Productos.filter((k) =>{ return k.type === 'Ferreteria';});
    }

    if (this.tipo === '2') 
    {
      this.Productos = this.Productos.filter((k) =>{ return k.type === 'Bodegon';});
    }

    //this.Productos = aux;
    
  }

  onDeleteProduct(_id:string)
  {
    let result = this._producto.borrarProductos(_id);
    result.subscribe
    (
      r=> {this.onNofity('Completado', 'success', r); this.onGettingProducts();},
      e=> this.onNofity('Error!', 'error', e.message)
    );
    
  }

  onModifyProduct(_id:string, producto:any)
  {
    this.isDisabled = false;
    this.forma.setValue
    ({
      name:           producto.name,
      presentacion:   producto.presentacion,
      id_producto:    producto.id_producto,
      descripcion:    producto.descripcion,
      marca:          producto.marca,
      cantidad:       producto.cantidad,
      bulto:          producto.bulto,
      precio_unit:    producto.precio_unit,
      precio_multi:   producto.precio_mult,
      descuento_prec: producto.descuento.descuento,
      descuento_cant: producto.descuento.cantidad,
      unidad:         producto.unidad,
    });

    this.category   = producto.categoria
    this.sbCategory = producto.subCategoria;

    this.auxProdcut = producto; 
  }

  onConfirmModify()
  {
    this.isDisabled = true;
    
    this.auxProdcut.name = this.forma.value.name;
    this.auxProdcut.presentacion = this.forma.value.presentacion;
    this.auxProdcut.id_producto = this.forma.value.id_producto;
    this.auxProdcut.unidad = this.forma.value.unidad;
    this.auxProdcut.descripcion = this.forma.value.descripcion;
    this.auxProdcut.marca = this.forma.value.marca;
    this.auxProdcut.categoria = this.category;
    this.auxProdcut.subCategoria = this.sbCategory;
    this.auxProdcut.cantidad = this.forma.value.cantidad;
    this.auxProdcut.bulto = this.forma.value.bulto;
    this.auxProdcut.precio_unit = this.forma.value.precio_unit;
    this.auxProdcut.precio_mult = this.forma.value.precio_multi;
    this.auxProdcut.descuento =
    {
      descuento:  this.forma.value.descuento_prec,
      cantidad:   this.forma.value.descuento_cant
    };
    this.auxProdcut.type = this.tipo === '1'? 'Ferreteria':'Bodegon';
    this.auxProdcut.img = this.imageProdt;
    
      
    let result = this._producto.modificarProductos(this.auxProdcut._id, this.auxProdcut);
    result.subscribe
    (
      r => {this.onNofity('Modficado!', 'success', r);},
      e => this.onNofity('Error!', 'warning', e.error)
    );
  }

  onRegisterProduct()
  {
    let productoModelo = new ProductoModelo
    (
      this.capitalizeInput(this.forma.value.name),
      this.capitalizeInput(this.forma.value.presentacion),
      this.forma.value.id_producto,
      this.forma.value.unidad,
      this.capitalizeInput(this.forma.value.descripcion),
      this.forma.value.marca,
      this.category,
      this.sbCategory,
      this.forma.value.cantidad,
      this.forma.value.bulto,
      this.forma.value.precio_unit,
      this.forma.value.precio_multi,
      {
        descuento:  this.forma.value.descuento_prec,
        cantidad:   this.forma.value.descuento_cant
      },
      this.tipo === '1'? 'Ferreteria':'Bodegon',
      this.imageProdt
    );
    //console.log(productoModelo);
    
    let result = this._producto.guardarProductos(productoModelo);
    result.subscribe
    (
      r => this.onNofity('Guardado!', 'success', r),
      e => this.onNofity('Error!', 'warning', e.error)
    ); 

  }

  onChangeCategory(value:string = null,i:number,producto:ProductoModelo)
  {
    let arr = Object.keys(this.Categorias).map((k) => this.Categorias[k].name);

    Swal.fire({
      title:              'Cambiar categoria',
      input:              'select',
      inputOptions:       {'':arr},
      confirmButtonText:  'Cambiar',
      cancelButtonColor:  '#d33',
      showCancelButton:   true,
      cancelButtonText:   'Cancelar'
      

    }).then((result) => 
    {

      value = null;

      if (result.isConfirmed) 
      {
        producto.categoria[i] = arr[<number>result.value];
        this.filterSubcategory(producto.categoria);

        let apiResult = this._producto.modificarProductos(producto._id, producto);
        apiResult.subscribe
        (
          r => { this.onNofity(' ', 'success', r);},
          e => 
          {
            this.onNofity
              (
                ' ',
                'warning',
                { message: 'No se pudo añadir la Catagoría =/' }
              );
            console.log(e);
          }
        ); 
      }
    });
  }

  filterSubcategory(value:Array<string>)
  {

    this.subCategory.splice(0, this.subCategory.length);

    this.Categorias.filter((r)=>
    {
      for (let index = 0; index < value.length; index++) 
      {
        if(r.name === value[index]) return r;
      }

    }).forEach((s)=>
    { 
      s._subCategory.forEach(t=> this.subCategory.push(t));
      
    });
    
  }

  onChangeSubCategory(value:string = null,i:number,producto:ProductoModelo)
  {

    this.filterSubcategory(producto.categoria);

    Swal.fire({
      title:              'Cambiar SubCategoria',
      input:              'select',
      inputOptions:       {'':this.subCategory},
      confirmButtonText:  'Cambiar',
      cancelButtonColor:  '#d33',
      showCancelButton:   true,
      cancelButtonText:   'Cancelar'
      

    }).then((result) => 
    {

      if (result.isConfirmed) 
      {
        producto.subCategoria[i] = this.subCategory[<number>result.value];

        let apiResult = this._producto.modificarProductos(producto._id, producto);
        apiResult.subscribe
        (
          r => { this.onNofity(' ', 'success', r);},
          e => 
          {
            this.onNofity
              (
                ' ',
                'warning',
                { message: 'No se pudo añadir la SubCategoria =/' }
              );
            console.log(e);
          }
        ); 
      }
    });
  }

  onSelectCategory()
  {
    this.category.push(this.Catgforma.value.categoria);
    this.Catgforma.reset();
    this.filterSubcategory(this.category);
  }

  onDeleteListCategory(index:number)
  {
    this.category.splice(index,1);
    this.filterSubcategory(this.category);
  }

  onSelectSubCategory()
  {
    this.sbCategory.push(this.Catgforma.value.subCategoria);
    this.Catgforma.reset();
    console.log('Selector de subcategorias', this.subCategory);
  }

  onDeleteListSubCategory(index:number)
  {
    this.sbCategory.splice(index,1);
  }

  onSelectUnity()
  {
    console.log('Presentacion: ', this.forma.value.presentacion + this.forma.value.unidad);
    
  }

  onResetSelection()
  {
    this.category.splice(0, this.category.length);
    this.sbCategory.splice(0, this.sbCategory.length);
  }

  onBttViewerList()
  {
    this.onGettingProducts();
  }
}
