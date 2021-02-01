import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Thor', 'Holk', 'CapitÁn América'];
  heroeBorrado: string = '';

  borrarHeroe(): void{
    let elimnado = this.heroes.shift();
    this.heroeBorrado = elimnado || '';
  }
}
