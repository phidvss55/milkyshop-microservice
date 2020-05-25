import { HomeService } from './../../services/home/home.service';
import { Contact } from './contact.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = new Contact();
  notify: any = false;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  insertData() {
    console.log(this.contact);
    this.homeService.insertContact(this.contact).subscribe( res => {
      this.notify = res;
    })
    this.deleInfor();
  }

  deleInfor() {
    this.contact.c_name ='';
    this.contact.c_title ='';
    this.contact.c_email ='';
    this.contact.c_phone ='';
    this.contact.c_content ='';
  }

}
