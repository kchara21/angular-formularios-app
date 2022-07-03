import { Component, OnInit } from '@angular/core';

interface Persona{
  nombre:string;
  favoritos: Favorito[]
}

interface Favorito{
  id:number;
  nombre:string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  nuevoJuego:string="";

  persona:Persona = {
    nombre:'Kaleb',
    favoritos:[
      {id:1,nombre:'Call of Dutty'},
      {id:2,nombre:'FIFA 2022'}
    ]
  }
 
  constructor() { }

  ngOnInit(): void {
  }

  agregarJuego(){
    const juego:Favorito={
      id:this.persona.favoritos.length +1,
      nombre:this.nuevoJuego
    }

    this.persona.favoritos.push(juego);
    this.nuevoJuego = '';


  }

  guardar(){
    console.log('Formulario Postedao');
  }

  eliminar(index:number){
    this.persona.favoritos.splice(index,1);
  }

}
