import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioModelo } from '../../modelos/usuarios.model';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit 
{

  forma:FormGroup;

  constructor
  (
    public _usuarioService:UsuarioService
  ){ }

  equalInputs(value1:string, value2:string)
  {
    return (group: FormGroup) =>
    {
      let pass1 = group.controls[value1].value;
      let pass2 = group.controls[value2].value;

      if(pass1 === pass2){ return null; }

      return {equalINputs: true};
    }
  }

  ngOnInit(): void 
  {
    this.forma = new FormGroup
    ({
      name:       new FormControl(null, Validators.required),
      surname:    new FormControl(null, Validators.required),
      email:      new FormControl(null, [Validators.required, Validators.email]),
      cID:        new FormControl(null, Validators.required),
      adress1:    new FormControl(null, Validators.required),
      adress2:    new FormControl(null, Validators.required),
      question1:  new FormControl(null, Validators.required),
      answer1:    new FormControl(null, Validators.required),
      question2:  new FormControl(null, Validators.required),
      answer2:    new FormControl(null, Validators.required),
      phone1:     new FormControl(null, Validators.required),
      phone2:     new FormControl(null, Validators.required),
      password1:  new FormControl(null, [Validators.required, Validators.min(6)]),
      password2:  new FormControl(null, [Validators.required, Validators.min(6)])

    },
    {
      validators: this.equalInputs('password1', 'password2')
    });
    
    this.forma.setValue
    ({
      name:      'sss1',
      surname:   'sss2',
      email:     'sss@gmail.com',
      cID:       'cisss',
      adress1:   'sss21',
      adress2:   'sss21',
      question1: 'sss',
      answer1:   'sss',
      question2: 'sss',                                        
      answer2:   'sss',                                         
      phone1:    'sss222',
      phone2:    'sss111',                                            
      password1: 'sss111',
      password2: 'sss111',  
    });
    
  }

  onFailure(value:string)
  {
    Swal.fire({
      title: 'Error!',
      text: value,
      icon: 'error',
      confirmButtonText: 'Cerrar'
    });
  }

  onCompleted(value)
  {
    Swal.fire({
      title: 'Registrado!',
      text: value.message,
      icon: 'success',
      confirmButtonText: 'Cerrar'
    });
  }

  onSubmit()
  {
    if(this.forma.invalid)
    { 
      Swal.fire({
        title: 'Error!',
        text: 'Las contraseñas deben coincidir',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })
      return;
    }
    
    console.log('Es valida? ', this.forma.valid);

    
    
    let usuario = new UsuarioModelo
    (
      this.forma.value.name,
      this.forma.value.password1,
      this.forma.value.email,
      [
        this.forma.value.adress1,
        this.forma.value.adress2
      ],
      [
        this.forma.value.phone1,
        this.forma.value.phone2
      ],
      this.forma.value.cID,
      'no_tiene',
      [
        {
          "question"	: this.forma.value.question1,
          "response"	: this.forma.value.answer1
        },
        {
          "question"	: this.forma.value.question2,
          "response"	: this.forma.value.answer2
        }
      ]
    );

    let retorno = this._usuarioService.crearUsuario(usuario);

    retorno.subscribe
    (
      (r)=>this.onCompleted(r),
      (e)=>this.onFailure(e.error.message),
      ()=>console.log('Completado')
    );
    
  }

}
