"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    year;
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getId() {
        return this.id;
    }
    updateInfo(newTitle, newAuthor, newYear) {
        this.title = newTitle;
        this.author = newAuthor;
        this.year = newYear;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    deleteBookById(id) {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.getId() !== id);
        if (this.books.length === initialLength) {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor, newYear);
        }
        else {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }
    printBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện trống");
            return;
        }
        this.books.forEach(book => {
            console.log(`ID: ${book.getId()}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
        });
    }
}
const library = new Library();
const book1 = new Book(1, "Sách A", "Tác giả A", 2020);
const book2 = new Book(2, "Sách B", "Tác giả B", 2021);
library.addBook(book1);
library.addBook(book2);
library.updateBookById(1, "Sách A (mới)", "Tác giả A (mới)", 2024);
library.deleteBookById(2);
library.printBooks();
//# sourceMappingURL=Ex9.js.map