import React, {useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux';
import styled, {css} from 'styled-components';

//-------------------------------STYLED COMPONENTS-------------------------------//
const CardSpace = styled.div`
    width: 80%;
    display: inline-flex;
    flex-wrap: wrap;
    margin-left: 10%;
    padding-left: 10px;
    justify-content: flex-start;
`

const Card = styled.div`
    padding: 10px;
    width: 20%;
    height: 500px;
    border: 2px solid black;
    margin: 5%;
    text-align: center;
    box-shadow: -13px 9px 5px 0px rgba(94, 33, 17, 0.7);
`

const CardTitle = styled.div`
    padding-top: 5px;
    font-size: 1.3rem;
    letter-spacing: 3px;
`

const CardImage = styled.img`
    height: 60%;
    width: 90%;
`

const CardText = styled.p`
    font-spacing: 3px;
`

export default function BookList() {
    const bookImg = require('./book_icon.jpg');
    const bookList = useSelector(state => state.bookReducer);
    const dispatch = useDispatch();
    useEffect(() => {dispatch({type:'FETCH_BOOKS'})}, []);

    
    return (
        <CardSpace>
            {bookList.map(book => 
                <Card key={book.id} border="secondary">
                        <CardImage src={book.url}></CardImage>
                        <CardTitle>{book.title} </CardTitle>
                        <p>{book.subject}</p>
                        <p>{book.publication_year}</p>
                        <p>{book.pages} pages</p>
                </Card>
            )}  
        </CardSpace>
    )
}

