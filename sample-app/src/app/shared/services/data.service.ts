import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public API_PATH = 'https://www.googleapis.com/books/v1/volumes/';
  constructor(private http:HttpClient) { }
  getBooks(volumeId:string){
    //return this.http.get('https://www.googleapis.com/books/v1/volumes?q=flowers')
    return this.http.get(`${this.API_PATH}?q=${volumeId}`)
  }
}
