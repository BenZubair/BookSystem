import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  id!: number;
  book: Book = new Book();

  constructor(private bookService: BooksService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    },
      error => {
      });
  }

  onSubmit(){
    this.bookService.updateBook(this.id, this.book).subscribe( data =>{
      this.goToBookList();
    }
    , error => console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }
}
