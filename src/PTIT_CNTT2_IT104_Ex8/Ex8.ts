class Book {
  private id: string;
  title: string;
  author: string;

  constructor(id: string, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  searchByTitle(title: string): boolean {
    return this.title.toLowerCase().includes(title.toLowerCase());
  }
}

class Library {
  books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  searchBooksByTitle(title: string) {
    const results = this.books.filter(book => book.searchByTitle(title));
    return results;
  }

  printBooks() {
    for (let book of this.books) {
      console.log(`ID: ${book.getId()}, Title: ${book.title}, Author: ${book.author}`);
    }
  }
}

const library = new Library();
const book1 = new Book("B01", "Sách A", "Tác giả A");
const book2 = new Book("B02", "Sách B", "Tác giả B");
library.addBook(book1);
library.addBook(book2);

library.searchBooksByTitle("Sách A");
library.printBooks();