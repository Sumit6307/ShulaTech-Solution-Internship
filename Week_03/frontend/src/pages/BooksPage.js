import { useEffect, useState } from "react";
import axios from "axios";

const BooksPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get("/api/books");
            setBooks(res.data);
        };
        fetchBooks();
    }, []);

    return (
        <div>
            <h2>Book Reviews</h2>
            {books.map((book) => (
                <div key={book._id}>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <p>⭐ {book.averageRating}</p>
                </div>
            ))}
        </div>
    );
};

export default BooksPage;
