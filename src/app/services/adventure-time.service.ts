import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { CHARACTERS } from '../mock-data';


@Injectable({
  providedIn: 'root'
})
export class AdventureTimeService {

  constructor() { }


  getCharacters(): Observable<any[]> {
    return of(CHARACTERS)
      .pipe(
        delay(100)
      );
  }
  getColumns(): string[] {
    return ["Name", "Age", "Species", "Occupation"];
  }

}

