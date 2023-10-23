import {useEffect,useState} from 'react'
import BookCards from './BookCards'
const OtherBooks = () => {
    const[books,setbooks]=useState([])
    useEffect(() => {
        fetch("http://localhost:3000/all-books")
          .then((res) => res.json())
          .then((data) => setbooks(data.slice(4,8)));
      }, []);
  return (
    <div>
      <BookCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks
