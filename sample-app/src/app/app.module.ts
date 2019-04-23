import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './shared/services/data.service';
import { BooksComponent } from './components/books/books.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule, MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import { SearchBookComponent } from './components/search-book/search-book.component';
import { MaxLength } from './shared/pipes/maxlength.pipe';


export const PIPES = [
  MaxLength
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    SearchBookComponent,
    PIPES
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
