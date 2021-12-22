import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  readonly ROOT_URL;
  //dev:https://localhost:3001 //prod: https://wishs-book.herokuapp.com/
  constructor(private http: HttpClient) {
    this.ROOT_URL = 'https://wishs-book.herokuapp.com';
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  put(uri: string, payload: Object) {
    return this.http.put(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string, payload: Object) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`, payload);
  }
}
