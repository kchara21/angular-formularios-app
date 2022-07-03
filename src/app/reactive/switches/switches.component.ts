import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    genero:['M',Validators.required],
    notificaciones:[true,Validators.required],
    condiciones:[false,Validators.requiredTrue]
  });

  persona = {
    genero:'F',
    notificaciones:true,
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
    condiciones:false});

    this.miFormulario.get('condiciones')?.valueChanges.subscribe(form=>{
      console.log(form);
    }) // PARA ESCUCHAR LOS CAMBIOS DE PARAMETROS EN CONCRETO DEL OBJETO

    this.miFormulario.valueChanges.subscribe(form=>{
      delete form.condiciones; 
      this.persona = form;
    }) // PARA ESCUCHAR TODOS LOS PARAMETROS DE MI OBJETO. 
  }

  guardar(){
    const formValue = {...this.miFormulario.value};  //ROMPE LA RELACION CON ESTE OPERADOR, para crear una copia del formulario. 
    delete formValue.condiciones; //Para eliminar una propiedad de mi objeto de referencia
    this.persona = formValue;
    console.log(formValue);
  }

}
