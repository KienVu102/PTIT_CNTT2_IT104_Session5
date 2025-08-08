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

  updateInfo(title: string, author: string) {
    this.title = title;
    this.author = author;
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

  updateBookById(id: string, title: string, author: string) {
    for (let book of this.books) {
      if (book.getId() === id) {
        book.updateInfo(title, author);
        break;
      }
    }
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

library.updateBookById("B01", "Sách A1 (mới)", "Tác giả A1 (mới)");
library.printBooks();