import { useEffect, useState } from "react";
import BookCards from './BookCards'

const BestSellerBooks = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => setbooks(data.slice(0,8)));
  }, []);
  return <div><BookCards books={books} headline="Best Seller Books"/></div>;
};

export default BestSellerBooks;
