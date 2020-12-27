import React, {useEffect, useState} from 'react';
import BookList from '../BookList/BookList';
import { useDispatch, useSelector} from 'react-redux';
import {useInput} from '../Hooks/Hooks';

export default function AddBook () {
    //imports redux state for book subjects
    const subjectList = useSelector(state => state.subjectReducer);
    //dispatches a request for the list of subjects to render in dropdown menu
    const dispatch = useDispatch();
    useEffect(() => {dispatch({type:'FETCH_SUBJECTS'})}, []);

    //defining hooks for input fields
    const [titleProps, resetTitle] = useInput('');
    const [publishedProps, resetPublished] = useInput(null);
    const [pagesProps, resetPages] = useInput(null);
    const [subjectProps, resetSubject] = useInput(null);

    //form submit function
    const submit = event => {
        event.preventDefault();
        console.log(titleProps.value, publishedProps.value, pagesProps.value, subjectProps.value);
    }

    //render properties for input fields
    const formData = 
        [
            {style: {width:"60%", border: "2px solid red"}, type: "text", label: "Title", varName: "title", function: titleProps}, 
            {style: {width:"25%"}, type: "text", label: "Year Published", varName: "year_published", function: publishedProps},
            {style: {width:"25%"}, type: "text", label: "Pages", varName: "pages", function: pagesProps}
        ];

   
    return (
        <div className="book-form">
            <h2>Add Book</h2>
            <form onSubmit={submit}>
                {formData.map((input, i) => 
                    <div key={i}><label>{input.label}</label>
                        <input {...input.function} type={input.type} style={input.style}/>
                    </div>
                    )}
                <label>Subject</label>
                <select name="subject" {...subjectProps}>
                    <option>Choose a subject</option>
                    {subjectList.map((s, i) => (<option key={i} value={s.id}>{s.subject}</option>))}
                </select>
                <button>Submit</button>
            </form>
            <h2>Book Collection</h2>
            <BookList/>
        </div>
    )
}

