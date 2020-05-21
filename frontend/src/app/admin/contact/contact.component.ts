import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  dataArr: any;
  p: number = 1;
  // notify: any = false;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact() {
    this.dataService.getContacts().subscribe( res => {
      this.dataArr = res;
    });
  }

  resolveProblem(id) {
    var obj = {
      "id": id
    }
    this.dataService.resolveContact(obj).subscribe( res => {
      this.getContact();
    });
  }

  deleteContact(id) {
    this.dataService.deleteContact(id).subscribe( res => {
      this.getContact();
    });
  }
}
