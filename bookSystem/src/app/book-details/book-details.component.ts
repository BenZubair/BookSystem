import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  id!: number;
  books!: Book;
  
  constructor(private route: ActivatedRoute,
     private bookService: BooksService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.books = new Book();
    this.bookService.getBookById(this.id).subscribe( data => {
      this.books = data;
    });
  }
}
