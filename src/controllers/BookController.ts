import { Router } from 'express';
import { BookService } from '../services/BookService';

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

export default router;