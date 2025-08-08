"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    updateInfo(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    books;
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    updateBookById(id, title, author) {
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
//# sourceMappingURL=Ex7.js.map