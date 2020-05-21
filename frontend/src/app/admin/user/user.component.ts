import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  p: number = 1;
  dataArr: any;
  imageDirectoryPath = 'http://localhost:8000/image/user/';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getUsersData();
  }

  changeActive(id, active) {
    var obj = {
      "id": id,
      "active": active
    }
    this.dataService.changeActiveUser(obj).subscribe( res => {
      this.getUsersData();
    });
  }

  deleteUser(id) {
    this.dataService.deleteUser(id).subscribe( res => {
      this.dataArr = res;
    })
  }
  
  getUsersData() {
    this.dataService.getUser().subscribe( res => {
      this.dataArr = res;
    })
  }
}
