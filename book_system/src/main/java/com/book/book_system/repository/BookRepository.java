package com.book.book_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.book_system.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
    
}
