import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Call of Dutty',Validators.required],['Fifa 2022',Validators.required]
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('',Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb:FormBuilder) { }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      
    }
    console.log(this.miFormulario.value);
  }

  campoEsValido(campo:string){
    return this.miFormulario?.controls?.[campo]?.errors 
    && this.miFormulario?.controls?.[campo]?.touched;
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){ return ;}

    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value,Validators.required))
    this.nuevoFavorito.reset();
  }

  borrar(index:number){
    this.favoritosArr.removeAt(index);
  }

  ngOnInit(): void {
  }

}
