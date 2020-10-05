import React from 'react'
import Modal from 'react-bootstrap/Modal'

//Dynamically add api data to this page via FetchBooks

export const BookModal = (props) => {
    return (
    <div>
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
    <Modal.Title>BOOK TITLE</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <p>BOOK IMG</p>
    <p>BOOK_AUTHOR</p>
    <p>BOOK_PUBLISHER</p>
    <p>BOOK_DESCRIPTION</p>
      
    <div>
    <p>PURCHASE LINKS</p>
    </div>
    </Modal.Body>
    </Modal>           
    </div>
    )
}
