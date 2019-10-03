import { Component, OnInit, Input } from '@angular/core';
  

@Component({
  selector: '[child]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  /**
   * ESTE COMPONENTE TIENE QUE ACEPTAR UN PERSONAJE DE LISTA DE COLUMNAS
   * DEL COMPONENTE PADRE, PARA ELLO USAMOS INPUTS.
   */
  @Input() character : any;
  @Input() columns : string[];

  constructor() { }

  ngOnInit() {
  }

}
