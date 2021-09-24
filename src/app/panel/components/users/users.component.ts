import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: any;
  user: any;
  ide: any;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    // paramMap reconoce lo que viene en la URL
    this.ide = this.route.snapshot.paramMap.get('ide');

    if(this.ide === '1'){
      this.router.navigateByUrl('/panel');
    }
  }

  // Indicando las intrucciones para la variable tipo
  // router que se declaró en el contructor
  goToProfile(){
    this.router.navigateByUrl('/panel/profile');
  }

  getUsers(){
    // subscribe espera la información para recibirla
    // manda la información a la consola con console.log(res)
    // o a una variable
    this.userService.getUsers().subscribe(res =>{
      this.userList = res;
      console.log(res);
    }, error => {
      console.error(error);
    });
  }

  getUser(id: any) {
    this.userService.getUser(id).subscribe(res => {
      this.user = res;
    }, error => {
      console.error(error);
    });
  }
}