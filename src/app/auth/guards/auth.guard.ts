import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  // Necesita regresar un true o un false, para 
  // saber si te deja pasar o no
  canActivate(){
    if(this.authService.IsAuth()){
      this.router.navigateByUrl('/panel');
    }
    return true;
  }

  
}
