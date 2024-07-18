import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = new Book();
  constructor(private bookService: BooksService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveBook(){
    this.bookService.addBook(this.book).subscribe( data =>{
      console.log(data);
      this.goToBookList();

      alert("Book Successful Added!")
    },
      error => {
        alert("Fail to Add Book!")
      });
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }

  onSubmit(){
    console.log(this.book);
    this.saveBook();
  }

}
