import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { $ } from 'protractor';

const endpoint = 'https://jsonplaceholder.typicode.com/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAlbums(): Observable<any> {
    return this.http.get(endpoint + 'albums').pipe(
      map(this.extractData));
  }

  getUsers(): Observable<any> {
    return this.http.get(endpoint + 'users').pipe(
      map(this.extractData));
  }

  getAlbum(id: number): Observable<any> {
    //const url = `${endpoint}/photos/${id}`;
    return this.http.get(endpoint + 'photos/?albumId=' + id).pipe(
      map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);  
      return of(result as T);
    };
  }
  
}
