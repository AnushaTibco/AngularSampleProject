import { Component, Output, OnInit,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
}
@Input() query = '';
@Output() searchEmit = new EventEmitter();
search(){
this.searchEmit.emit(this.query);

}

}
