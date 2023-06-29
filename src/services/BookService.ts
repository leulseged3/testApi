import { AppDataSource } from '../data-source';
import { Book } from '../entities/book.entity';

export class BookService {
  private bookRepository = AppDataSource.getRepository(Book);

  async getBooks() {
    return await this.bookRepository.find();
  }

  async getBook(id: number) {
    return await this.bookRepository.findOne({ where : { id }})
  }

  async createBulk(books: Array<Book>) {
    await this.bookRepository.save(books)
  }
}