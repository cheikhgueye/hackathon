import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Data} from '../../model/data';


/*
  Generated class for the DatasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DatasProvider Provider');
  }
 getDatas(): Observable<Data[]>{
    return this.http.get<Data[]>('assets/data/donnees.json');

  }


}
