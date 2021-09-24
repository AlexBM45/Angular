import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('eve.holt@reqres.in', [Validators.email, Validators.required]),
    password: new FormControl('cityslicka', Validators.required),
  });

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe (res => {
      alert(JSON.stringify(res.token));
      localStorage.setItem('token', res['token']);
      this.router.navigateByUrl('/panel');
      // alert(JSON.stringify(res)); //devuelve el token del usuario
    }, () => {
      alert('Ha ocurrido un error');
    });
  }
}
