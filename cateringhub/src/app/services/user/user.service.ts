import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginRequest } from '../../models/login-request.model';
import { User } from '../../models/user.model';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _endpoint = 'users';

  constructor(private readonly _apiService: ApiService) {}

  findAll(): Observable<User[]> {
    return this._apiService.get<User[]>(this._endpoint);
  }

  findById(id: number): Observable<User> {
    return this._apiService.get<User>(`${this._endpoint}/${id}`);
  }

  save(users: User[]): Observable<User> {
    return this._apiService.post<User>(this._endpoint, users);
  }

  deleteById(id: number): Observable<void> {
    return this._apiService.delete<void>(`${this._endpoint}/${id}`);
  }

  login(
    loginRequest: LoginRequest
  ): Observable<{ token: string; username?: string }> {
    return this._apiService
      .post<{ token: string; username?: string }>(
        `${this._endpoint}/signin`,
        loginRequest
      )
      .pipe(
        tap((response) => {
          response?.token && localStorage.setItem('jwtToken', response.token);

          response?.username &&
            localStorage.setItem('username', response.username);
        })
      );
  }

  getCurrentUser(): User | null {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? (JSON.parse(userJson) as User) : null;
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('username');
  }
}
