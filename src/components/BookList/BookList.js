import React, {useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux';
import {Card, CardDeck} from 'react-bootstrap';




export default function BookList() {
    const bookList = useSelector(state => state.bookReducer);
    const dispatch = useDispatch();
    useEffect(() => {dispatch({type:'FETCH_BOOKS'})}, []);

    
    return (
        <CardDeck>
            {bookList.map(book => 
                <Card key={book.id} border="secondary">
                    <Card.Img
                        variant="top"
                        src="./book_icon.jpg"
                    />
                    <Card.Body>
                        <Card.Title>{book.title} </Card.Title>
                        <Card.Text>{book.subject}</Card.Text>
                        <Card.Text>Published: {book.publication_year}</Card.Text>
                        <Card.Text>Length {book.pages} pages</Card.Text>
                    </Card.Body>
                </Card>
            )}
        </CardDeck>   
    )
}

