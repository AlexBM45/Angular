import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = environment.apiUrl;

  // Nos deja hacer las peticiones de información
  constructor(
    private http: HttpClient,
    ) { }

  getUsers(){
    // Llama a los datos de la pagina
    return this.http.get(`${this.apiUrl}users`);
  }

  getUser(id: any){
    return this.http.get(`${this.apiUrl}users/${id}`);
  }
 
}