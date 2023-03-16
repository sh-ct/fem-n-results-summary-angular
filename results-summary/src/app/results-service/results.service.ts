import { Injectable } from '@angular/core';
import * as jsonData from '../../assets/data/data.json'

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  results: any = jsonData;

  constructor() { }

  getResults() {
    return Array.from(jsonData);
  }

}
