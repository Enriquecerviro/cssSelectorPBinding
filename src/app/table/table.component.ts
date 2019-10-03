import { Component, OnInit } from '@angular/core';
import { AdventureTimeService } from '../services/adventure-time.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  //VARS DE LA CLASE
  characters: Observable<any[]>;
  columns: string[];

  constructor(private atService: AdventureTimeService) { }

  ngOnInit() {
    this.columns = this.atService.getColumns();//INICIAMOS LAS COLUMNAS CUANDO SE LLAME AL COMPONENTE
    this.characters = this.atService.getCharacters();//ALL DATA FORM MOCK-DATA
    
  }

}
