class Book {
  private readonly id: number;
  public title: string;
  public author: string;
  public year: number;

  constructor(id: number, title: string, author: string, year: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getId(): number {
    return this.id;
  }

  updateInfo(newTitle: string, newAuthor: string, newYear: number): void {
    this.title = newTitle;
    this.author = newAuthor;
    this.year = newYear;
  }
}

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  deleteBookById(id: number): void {
    const initialLength = this.books.length;
    this.books = this.books.filter(book => book.getId() !== id);

    if (this.books.length === initialLength) {
      console.log(`Không tìm thấy sách có ID ${id}`);
    }
  }

  updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
    const book = this.books.find(b => b.getId() === id);
    if (book) {
      book.updateInfo(newTitle, newAuthor, newYear);
    } else {
      console.log(`Không tìm thấy sách có ID ${id}`);
    }
  }

  printBooks(): void {
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
