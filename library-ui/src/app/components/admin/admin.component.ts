import { Component, OnInit } from '@angular/core';
import { IsbnService } from '../../services/isbn.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public isbn;

  constructor(private isbnService: IsbnService) { }

  ngOnInit(){
     this.getIsbn();
  }

  getIsbn(){
     this.isbnService.getIsbn().subscribe(
	data => {this.isbn = data},
        err => console.error(err),
        () => console.log('isbn loaded')
     );	
  }

}
