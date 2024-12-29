import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books = [
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
    { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
  ];

  getBooks() {
    return this.books;
  }
}
