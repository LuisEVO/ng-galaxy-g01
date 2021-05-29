import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersHttpService {

  constructor(private http: HttpClient) { }

  searchByEmail(email: string): Observable<User[]> {
    // FORMA CONVENCIONAL: return this.http.get(`/users?email=${email}`)

    const params = new HttpParams()
    .set('email', email);

    return this.http.get<User[]>('/users', { params });
  }
}
