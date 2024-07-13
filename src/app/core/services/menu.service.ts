import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'https://localhost:5001/api/Foods';

  constructor(private http: HttpClient) { 
  }

  getMenu(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }


}
