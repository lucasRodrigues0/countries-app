import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private url = 'https://restcountries.com/v3.1';

  public getAll(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(`${this.url}/all`).pipe(
      res => res,
      err => err
    );
  }

  public getByName(name: string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(`${this.url}/name/${name}?fullText=true`).pipe(
      res => res,
      err => err
    );
  }

}
