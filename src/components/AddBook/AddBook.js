import React, {useEffect} from 'react';
import BookList from '../BookList/BookList';
import { useDispatch, useSelector} from 'react-redux';

export default function AddBook () {
    const subjectList = useSelector(state => state.subjectReducer);
    const inputFields = useSelector(state => state.newBookReducer);
    console.log(inputFields);
    const dispatch = useDispatch();
    let titleField = inputFields.filter(object => Object.keys(object)==='title');
    console.log(titleField);
    useEffect(() => {dispatch({type:'FETCH_SUBJECTS'})}, []);

    const formData = 
        [
            {style: {width:"60%", border: "2px solid red"}, type: "text", label: "Title", varName: "title"}, 
            {style: {width:"25%"}, type: "text", label: "Year Published", varName: "year_published"},
            {style: {width:"25%"}, type: "text", label: "Pages", varName: "pages"}
        ];

    function handleSubmit(event) {
        event.preventDefault();

    }

    function handleChange(event, name) {
        dispatch({type:'SET_NEW_BOOK', payload:{[name]:event.target.value}})
    }

    return (
        <div className="book-form">
            <h2>Add Book</h2>
            <form onSubmit={(event) => handleSubmit}>
                {formData.map((input, i) => 
                    <div key={i}><label>{input.label}</label>
                        <input type={input.type} style={input.style} onChange={(event) => handleChange(event, input.varName)}/>
                    </div>
                    )}
                <label>Subject</label>
                <select name="subject">
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

