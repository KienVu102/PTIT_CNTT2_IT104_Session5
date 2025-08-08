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
    getTitle() {
        return this.title;
    }
    searchByTitle(title) {
        return this.title.toLowerCase().includes(title.toLowerCase());
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
    searchBooksByTitle(title) {
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
//# sourceMappingURL=Ex8.js.map