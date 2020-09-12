export class UsuarioModelo 
{
	
	constructor
	(
		public name				:string,
		public password			:string,
		public email			:string,
		public adress			:Array<string>,
		public phone			:Array<string>,
		public cID				:string,
		public photo			:string,
		public _userQuestions	:Array<Object>,
		public _id?				:string,
		public role?			:string

	) {}
}