import React, {useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';



export default function BookList() {
    const bookImg = require('./book_icon.jpg');
    const bookList = useSelector(state => state.bookReducer);
    const dispatch = useDispatch();
    useEffect(() => {dispatch({type:'FETCH_BOOKS'})}, []);

    
    return (
        <Grid container spacing={4}>
            {bookList.map(book => 
                <Card key={book.id} border="secondary">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={bookImg}
                            title="book icon"
                        />
                    
                        <CardContent>{book.title} </CardContent>
                        <CardContent>{book.subject}</CardContent>
                        <CardContent>Published: {book.publication_year}</CardContent>
                        <CardContent>Length {book.pages} pages</CardContent>
                    </CardActionArea>
                </Card>
            )}  
        </Grid>
    )
}

