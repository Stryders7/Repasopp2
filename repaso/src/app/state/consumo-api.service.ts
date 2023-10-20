import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  private BASE_URL = 'https://swapi.dev/api/';

  constructor(
    private http : HttpClient
  ) { 

  }

  getFilms():Observable<any>{
    return this.http.get(`${this.BASE_URL}/films/`);
  }
}
