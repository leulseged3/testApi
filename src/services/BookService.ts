import { AppDataSource } from '../data-source';
import { Book } from '../entities/book.entity';

export class BookService {
  private bookRepository = AppDataSource.getRepository(Book);

  async getBooks(page: number, pageSize: number) {
    const skip = (page - 1)* pageSize;
    const take = pageSize;

    const [books, total] = await this.bookRepository.findAndCount({ skip, take });
    return {books, total, currentPage: page};
  }

  async getBook(id: number) {
    return await this.bookRepository.findOne({ where : { id }})
  }

  async createBulk(books: Array<Book>) {
    await this.bookRepository.save(books)
  }
}