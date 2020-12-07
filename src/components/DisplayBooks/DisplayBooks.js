import React from 'react'
import './displaybooks.css'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'

export const DisplayBooks = (props) => {

    return (
    <section>
    <div className="book_result mx-auto text-center">
    {props.displayBooks.map((book) => (
     <Card key={book.rank} className="book_card" style={{ width: '20rem', height: '100%' }}>
     <Card.Img variant="top" src={book.book_image}  alt={book.title} />
     <Card.Body className="text-left">
      <Card.Title>
        <h5>{book.title.length < 15 ? `${book.title}`:
        `${book.title.substring(0, 20)}...`}</h5>
      </Card.Title>
      <Card.Text>
      <p>Author: {book.author}</p>
      <p>Rank: {book.rank}</p>
      </Card.Text>
     <Link to={{ pathname: `bookdetails/${book.rank}`, state: { book: book.title } }}  
     className="modal_btn mb-3"> 
      Read more
     </Link>
    </Card.Body>
    </Card>
    ))}
    </div>
    </section>
    )
}
