export class ProductoModelo
{
    constructor
    (
        public name         :string,
        public presentacion :string,
        public id_producto  :string,
        public unidad       :string,
        public descripcion  :string,
        public marca        :string,
        public categoria    :Array<string>,
        public subCategoria :Array<string>,
        public cantidad     :number,//cantidad unidades
        public bulto        :number,//unidades del bulto
        public precio_unit  :number,//valor al detal
        public precio_mult  :number,//valor al mayor
        public descuento    :object,//cantidad para descuento y el descuento en si
        public type         :string,//si es de ferreteria o bodegon
        public img?         :Array<string>,//carrete de imagenes
        public _id?         :string//codigo del producto
    ){ }
}