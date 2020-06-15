import { Component, OnInit } from '@angular/core';
import { IsbnService } from '../../services/isbn.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isbnform: FormGroup;
  validMessage: string = "";
	
  constructor(private isbnService: IsbnService) { }

  ngOnInit(){
     this.isbnform = new FormGroup({
     num: new FormControl('', Validators.required)
     });
  }

  submitIsbn() {
     if(this.isbnform.valid) {
       this.validMessage = "That isbn is valid.";
       this.isbnService.createIsbn(this.isbnform.value).subscribe(
          data => {
             this.isbnform.reset();
             return true;
          },
             error => {
             return Observable.throw(error);
          }
        )
     } else {
        this.validMessage = "Invalid isbn";
     }
  }   
}
