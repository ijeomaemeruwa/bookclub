import React, { useState, useEffect} from 'react'
import axios from 'axios';
import '../FetchBooks/FetchBooks.css'

export const FetchBooks = () => {
    
    const [bookState, setBookState] = useState({
      books: []
    })

    useEffect(() => {
        const apiURL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=2KArpNBRAYVdUhfgSHIZqDHEZIf17o9C`
        axios.get(apiURL).then((response) => {
            const allBooks = response.data.results.books
            setBookState({books:allBooks})
        })
    
    }, [setBookState]);


    return (
    <div>
    <div className="container-fluid row">
    {bookState.books.map((book, index) => (
    <div 
    key={index} 
    className="book_list col-lg-3 col-md-4 col-sm-6 m-auto">
     <div className="book_container">
       <img src={book.book_image} style={{ width: '100%'}} alt="book cover" />
     </div>
     <div className="book_content m-auto container-fluid" style={{width: '100%', maxHeight: '100%'}}>
     <p>{book.title}</p>
     <p>Author: {book.author}</p>
     <small>Published By: {book.publisher}</small>
     <p>Rank: {book.rank}</p>
     </div>
    
    </div>
    ))}
    </div>
    <br />
    </div>
    )
    }

