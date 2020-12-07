import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { DisplayBooks } from '../DisplayBooks/DisplayBooks'

export const FetchBooks = () => {
    const [bookState, setBookState] = useState({
      books: []
    })

    useEffect(() => {
        const apiURL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=2KArpNBRAYVdUhfgSHIZqDHEZIf17o9C`
        axios.get(apiURL).then((response) => {
            const allBooks = response.data.results.books
            setBookState({books:allBooks})
        });
    }, [setBookState]);


    return (
    <div>
    <Header />
    <DisplayBooks displayBooks={bookState.books} />
    <Footer />
    </div>
    )
    }

