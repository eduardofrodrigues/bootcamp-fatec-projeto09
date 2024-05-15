import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Seller from '../interfaces/Seller';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  getSellers(): Observable<Seller[]> {
    return this.http.get<Seller[]>("http://localhost:8080/sellers");
  }

}
