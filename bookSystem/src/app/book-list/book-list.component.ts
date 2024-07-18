import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books!: Book[];

  constructor(private bookService: BooksService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBook();
  }

  private getBook(){
    this.bookService.getBookList().subscribe(data => {
      this.books = data;
    });
  }

  bookDetails(id: number){
    this.router.navigate(['bookdetails', id]);
  }

  bookUpdate(id: number){
    this.router.navigate(['bookupdate', id]);
  }

  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe( data => {
      console.log(data);
      this.getBook();
      alert("Book Deleted Successful!")
    },
    error => {
      alert("Fail to Delete Book!")
    });
  }

}
