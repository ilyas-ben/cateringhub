import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly _baseUrl = 'http://localhost:8080';

  constructor(private readonly _http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    });
  }

  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this._http.get<T>(`${this._baseUrl}/${endpoint}`, {
      headers: this.getHeaders(),
      params,
    });
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this._http.post<T>(`${this._baseUrl}/${endpoint}`, body, {
      headers: this.getHeaders(),
    });
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this._http.put<T>(`${this._baseUrl}/${endpoint}`, body, {
      headers: this.getHeaders(),
    });
  }

  delete<T>(endpoint: string): Observable<T> {
    return this._http.delete<T>(`${this._baseUrl}/${endpoint}`, {
      headers: this.getHeaders(),
    });
  }
}
