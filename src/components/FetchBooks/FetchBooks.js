import React, { useState, useEffect} from 'react'
import axios from 'axios';
import '../FetchBooks/FetchBooks.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { BookModal } from '../BookModal/BookModal';

export const FetchBooks = () => {
    
    const [bookState, setBookState] = useState({
      books: []
    })
    
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        const apiURL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=2KArpNBRAYVdUhfgSHIZqDHEZIf17o9C`
        axios.get(apiURL).then((response) => {
            const allBooks = response.data.results.books
            setBookState({books:allBooks})
        })
    
    }, [setBookState]);


    return (
    <div>
      <Header />
    <div className="container-fluid row mb-5">
    {bookState.books.map((book, index) => (
    <div 
    key={index} 
    className="book_list col-lg-3 col-md-4 col-sm-6 mx-auto my-3">
     <div className="book_container">
       <img src={book.book_image} style={{ width: '100%', height: '100%'}} alt="book cover" />
     </div>
     <div className="book_content m-auto container-fluid" style={{width: '100%', maxHeight: '100%'}}>
     <p className="title_strike">{book.title}</p>
     <p>Author: {book.author}</p>
     <p>Rank: {book.rank}</p>
     <div>
     <button 
     onClick={() => setModalShow(true)}
     className="modal_btn mb-3">
      Read more
     </button>
      <BookModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
     </div>
     </div> 
     <br />
     <br />
    </div>
    ))}
    </div>
    <Footer />
    </div>
    )
    }

