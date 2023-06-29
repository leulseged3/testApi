import { Router } from 'express';
import { BookService } from '../services/BookService';
import { Book } from '../entities/book.entity';

const router = Router();
const bookService = new BookService();

router.get('/books', async (req, res) => {
  try {
    const books = await bookService.getBooks();
    res.json(books);
  } catch (error) {
    console.error('Error retrieving books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/book/:id', async (req, res) => {
  try {
    const books = await bookService.getBook(Number(req.params.id));
    res.json(books);
  } catch (error) {
    console.error('Error retrieving books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/books/create/batch', async(req, res) => {
  try {
    const books: Array<Book> = [];
    for(let i = 0; i< 49; i++) {
    const book = {
      id: i+1,
      title: '레이블라우스', 
      description: "Description of the book...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      discount: (i+1) * 2,
      coverImage: "https://loremflickr.com/640/480",
      price: (i+1) * 10
    } 
    books.push(book)
    }

    await bookService.createBulk(books)
    res.json({ message: "created"});
  } catch (error) {
    console.error('Error creating books:', error);
  res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;