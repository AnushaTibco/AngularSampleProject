import { Component, OnInit, Input} from '@angular/core'; 
import { DataService } from '../../shared/services/data.service';
import { Book } from '../../models/book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  queryName ='';
 // @Input() searchList = '';

   books: Book;
  constructor(private dataService: DataService){
    
  }
  
  // ngOnChanges(changes) {
  //   console.log(changes.searchList);
  // }
  @Input()
  set searchList(name) {
   this.queryName = name;
   this.dataService.getBooks(this.queryName).subscribe((res)=>{
    this.books = res['items'];
  })
  }
  
  ngOnInit() {
    
  }


}
