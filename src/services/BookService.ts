import { AppDataSource } from '../data-source';
import { Book } from '../entities/book.entity';

export class BookService {
  private bookRepository = AppDataSource.getRepository(Book);

  async getBooks() {
    return await this.bookRepository.find();
  }
}