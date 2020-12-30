import React, {useEffect, useState} from 'react';
import BookList from '../BookList/BookList';
import { useDispatch, useSelector} from 'react-redux';
import {useInput} from '../Hooks/Hooks';
import styled, {css} from 'styled-components';

//-------------------------------STYLED COMPONENTS-------------------------------//

const PageSpace = styled.div`
  padding: 10px;
  width: auto;
`
const FormSpace = styled.form`
    width: 80%;
    margin: auto;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px 80px;
    margin-top: 20px;
    box-shadow: -13px 9px 5px 0px rgba(94, 33, 17, 0.7);
`

const InputField = styled.input`
    border-radius: 5px;
    margin: 10px;
    box-shadow: inset -3px 6px 5px 0px rgba(171, 178, 178, 0.71);
    background: #fff;
`
const SelectField = styled.select`
    border-radius: 5px;
    box-shadow: 8px 8px 5px gray;
    margin: 10px;
    width: 400px;
    height: 20px;
    box-shadow: inset -3px 6px 5px 0px rgba(171, 178, 178, 0.71);
    background: #fff;
`
const SubmitButton = styled.button`
    border-radius: 5px;
    box-shadow: inset -3px 6px 5px 0px rgba(40, 81, 214, 0.4);
    margin: 10px;
    background-color: rgb(40, 81, 214);
    color: white;
    height: 40px;
    width: 100px;
`
const LabelBox = styled.div`
    width: 20%;
`

const InputBox = styled.div`
width: 70%;

${props => props.selectBox && css`
    width: 50%;
  `}
`

const FormRow = styled.div`
    display: inline-flex;
    width: 95%;
    justify-content: flex-start;
    margin-left: 2.5%
`

const SubHeader = styled.div`
    padding-top: 30px;
    text-align: center;
    font-size: 2rem;
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
            <FormSpace>
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
                    <FormRow selectRow>
                        <LabelBox>
                            <label>Subject</label>
                        </LabelBox>
                        <InputBox>
                            <SelectField name="subject" {...subjectProps}>
                                <option>Choose a subject</option>
                                {subjectList.map((s) => (<option key={s.id} value={s.id}>{s.subject}</option>))}
                            </SelectField>
                        </InputBox>
                        <SubmitButton>Submit</SubmitButton>
                    </FormRow>
                    <FormRow>
                        
                    </FormRow>
                </form>
            </FormSpace>
            <SubHeader>
                <h2>Book Collection</h2>
            </SubHeader>
            <BookList/>
        </PageSpace>
    )
}

