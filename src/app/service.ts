import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Service {

  baseUrl = 'http://localhost:3000/employees';
  
  constructor(private http: HttpClient) {
  }

  getEmployees() {
    return this.http.get(this.baseUrl);
  }
}

