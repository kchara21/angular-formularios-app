import { Component } from '@angular/core';

interface menuItem {
  texto:string;
  ruta:string;
}


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [`
    li{
      cursor:pointer;
    }
  `
  ]
})
export class SideMenuComponent  {

  
  templateMenu:menuItem[] = [
    {
      texto:'Basicos',
      ruta:'./template/basicos'
    },
    {
      texto:'Dinamicos',
      ruta:'./template/dinamicos'
    },
    {
      texto:'Switches',
      ruta:'./template/switches'
    }
  ];

  reactiveMenu:menuItem[] = [
    {
      texto:'Basicos',
      ruta:'./reactive/basicos'
    },
    {
      texto:'Dinamicos',
      ruta:'./reactive/dinamicos'
    },
    {
      texto:'Switches',
      ruta:'./reactive/switches'
    }
  ]


}
