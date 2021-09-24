import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

declare var $: any;

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    $(document).ready(function(){
      $('#sidebarCollapse').click(function(){
          $('#sidebar').toggleClass('active');
      })
    })
  }

  logout(){
    this.authService.logout();
  }
}
