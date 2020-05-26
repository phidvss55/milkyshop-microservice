import { DataService } from './../../../services/data.service';
import { Article } from '../article.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  article = new Article();
  id: any;
  data: any;
  file: any;
  imageSrc: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData() {
    this.dataService.getOneArticle(this.id).subscribe( res => {
      this.data = res;
      this.article = this.data;
    });
  }

  updateData() {
    let formData = new FormData();
    if(this.file) {
      formData.append('a_avatar', this.file, this.file.name);
    }    
    formData.append('data', JSON.stringify(this.article));
    formData.append('_method', 'PUT');    
    this.dataService.updateArticleData(this.id, formData).subscribe(
      data => this.handleData(data),
      error => console.log(error),
    );
  }

  handleData(data) {
    this.router.navigateByUrl('/admin/article');
  }

  imageUpload(event) {
    this.file = event.target.files[0];
  }

  readURL(event) {
    let files = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
