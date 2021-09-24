import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrlAuth;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  login(body: any){
    // Recibe los datos del login
    return this.http.post(`${this.apiUrl}login`, body);
  }
   
  logout(){
    // algunas APIs matan el token y ya no deja al usuario seguir en su sesión
    // normalmente está en el servicio
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth');
  }

  IsAuth(): boolean{
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }
}
