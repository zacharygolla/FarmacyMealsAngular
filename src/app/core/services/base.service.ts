import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected apiUrl = 'https://localhost:5001/api'; // Update with your API URL

  constructor(protected http: HttpClient) { }

  protected handleHttpError<T>(error: HttpErrorResponse, result?: T): Observable<T> {
    console.error('Error in HTTP request:', error);
    return throwError('An error occurred while processing the request.');
  }

  protected getHeaders(): HttpHeaders {
    // You can customize headers here if needed
    return new HttpHeaders().set('Authorization', 'Bearer YOUR_TOKEN');
  }
}
