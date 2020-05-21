import { Contact } from './contact.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = new Contact();

  constructor() { }

  ngOnInit(): void {
  }

}
