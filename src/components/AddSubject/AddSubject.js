import React from "react";
import SubjectList from '../SubjectList/SubjectList';
import {useInput} from '../Hooks/Hooks';
import { useDispatch} from 'react-redux';
import styled, {css} from 'styled-components';

//-------------------------------STYLED COMPONENTS-------------------------------//

const FormSpace = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 20px;
    display: inline-flex;
    justify-content: space-evenly;
`

const InputField = styled.input`
    border-radius: 5px;
    margin: 10px;
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


export default function AddSubject () {
    const [subjectProps, resetSubject] = useInput('');
    const dispatch = useDispatch();
    //form submit function
    const submit = event => {
        event.preventDefault();
        dispatch({type:'POST_SUBJECT', payload: {subject: subjectProps.value}});
        dispatch({type:'FETCH_SUBJECTS'});
        resetSubject();
    }

    const formData = 
    [
        {style: {width:"100%"}, type: "text", label: "Add Subject", function: subjectProps}, 
    ];

    return (
    <>
     
         <FormSpace onSubmit={submit}>
                {formData.map((input) => 
                    <div key={input.id}><label>{input.label}</label><InputField {...input.function} type={input.type} style={input.style}/></div>
                    )}
            <SubmitButton>Submit</SubmitButton>
        </FormSpace>           
    <SubjectList />
    </>
    )
}