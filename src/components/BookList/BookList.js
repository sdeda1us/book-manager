import React, {useEffect} from "react";
import { useDispatch} from 'react-redux';

export default function BookList() {
    const dispatch = useDispatch();
    useEffect(() => {dispatch({type:'FETCH_BOOKS'})}, []);

    return (
        <p>Hello from BookList</p>
       
    )
}