import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  contact: Contact = {
    name: '',
    age: 0,
    email: '',
    sex: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  // Guarda la información del formulario
  onSubmit(){
    alert(JSON.stringify(this.contact, null, 4));
  }

}