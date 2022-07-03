import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  //  miFormulario:FormGroup = new FormGroup({
  //    'nombre': new FormControl('RTX 4080ti'),
  //    'precio': new FormControl(1500),
  //    'existencias': new FormControl(5),
  //  });

  miFormulario:FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(3)]],
    precio:[0,[Validators.min(1), Validators.required]],
    existencias:[0,[Validators.min(1), Validators.required]],
  })

  constructor(private fb:FormBuilder){}


  campoEsValido(campo:string){
    return this.miFormulario?.controls?.[campo]?.errors 
    && this.miFormulario?.controls?.[campo]?.touched;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }


  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'RTX 4080ti',
      precio:1600,
      existencias:10
    })
  }

}
