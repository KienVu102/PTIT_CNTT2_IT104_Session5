"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        this.books.forEach(book => {
            console.log(book.getInfo());
        });
    }
}
const book1 = new Book("Book 1", "Author A");
const book2 = new Book("Book 2", "Author B");
const book3 = new Book("Book 3", "Author C");
const book4 = new Book("Book 4", "Author D");
const book5 = new Book("Book 5", "Author E");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.showBooks();
//# sourceMappingURL=Ex6.js.map