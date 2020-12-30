import React, {useEffect, useState} from 'react';
import BookList from '../BookList/BookList';
import { useDispatch, useSelector} from 'react-redux';
import {useInput} from '../Hooks/Hooks';
import styled from 'styled-components';

const PageSpace = styled.div`
  padding: 10px;
  width: auto;
`

const InputField = styled.input`
    border-radius: 5px;
    box-shadow: 10px 10px 5px gray;
    margin: 10px;
`
const SelectField = styled.select`
    border-radius: 5px;
    box-shadow: 8px 8px 5px gray;
    margin: 10px;
    width: 400px;
    height: 20px;
`
const SubmitButton = styled.button`
    border-radius: 5px;
    box-shadow: 8px 8px 5px gray;
    margin: 10px;
    background-color: green;
    color: white;
    height: 40px;
    width: 65px;
`
const LabelBox = styled.div`
    width: 20%;
`

const InputBox = styled.div`
width: 70%;
`

const FormRow = styled.div`
    display: inline-flex;
    width: 95%;
    justify-content: space-around;
`
export default function AddBook () {
    //imports redux state for book subjects
    const subjectList = useSelector(state => state.subjectReducer);
    //dispatches a request for the list of subjects to render in dropdown menu
    const dispatch = useDispatch();
    useEffect(() => {dispatch({type:'FETCH_SUBJECTS'})}, []);

    //defining hooks for input fields
    const [titleProps, resetTitle] = useInput('');
    const [publishedProps, resetPublished] = useInput('');
    const [pagesProps, resetPages] = useInput('');
    const [subjectProps, resetSubject] = useInput('');

    //form submit function
    const submit = event => {
        event.preventDefault();
        const formPacket = {title: titleProps.value, publication_year:publishedProps.value, pages: pagesProps.value, subject_id: subjectProps.value};
        dispatch({type:'POST_BOOK', payload: formPacket});
        dispatch({type:'FETCH_SUBJECTS'});
        resetTitle();
        resetPublished();
        resetPages();
        resetSubject();
    }

    //render properties for input fields
    const formData = 
        [
            {style: {id: 1, width:"80%"}, type: "text", label: "Title", varName: "title", function: titleProps}, 
            {style: {id: 2, width:"20%"}, type: "text", label: "Year Published", varName: "year_published", function: publishedProps},
            {style: {id: 3, width:"20%"}, type: "text", label: "Pages", varName: "pages", function: pagesProps}
        ];

   
    return (
        <PageSpace>
            <h2>Add Book</h2>
            <form onSubmit={submit}>
                {formData.map((input) => 
                    <FormRow>
                        <LabelBox key={input.id}>
                            <label>{input.label}</label>
                        </LabelBox>
                        <InputBox>  
                            <InputField {...input.function} 
                                type={input.type} style={input.style}/>
                        </InputBox>
                    </FormRow>)}
                <FormRow>
                    <LabelBox>
                        <label>Subject</label>
                    </LabelBox>
                    <InputBox>
                        <SelectField name="subject" {...subjectProps}>
                            <option>Choose a subject</option>
                            {subjectList.map((s) => (<option key={s.id} value={s.id}>{s.subject}</option>))}
                        </SelectField>
                    </InputBox>
                </FormRow>
                <FormRow>
                    <SubmitButton>Submit</SubmitButton>
                </FormRow>
            </form>
            <h2>Book Collection</h2>
            <BookList/>
        </PageSpace>
    )
}

