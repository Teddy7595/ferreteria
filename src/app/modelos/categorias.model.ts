export class CategoriasModelo
{
    constructor
    (
        public name          :string,
        public _subCategory  :Array<string>,
        public department    :string,
        public _id?          :string
    ){}
}