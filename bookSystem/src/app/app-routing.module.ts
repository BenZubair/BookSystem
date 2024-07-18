import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookUpdateComponent } from './book-update/book-update.component';

const routes: Routes = [

  {
    path: 'add-book',
    component: AddBookComponent
  },

  {
      path: 'books',
      component: BookListComponent
  },

  {
      path: 'bookupdate/:id',
      component: BookUpdateComponent
  },

  {
      path: 'bookdetails/:id',
      component: BookDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
