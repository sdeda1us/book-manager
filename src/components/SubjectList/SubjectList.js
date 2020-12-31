import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import styled, {css} from 'styled-components';

//-------------------------------STYLED COMPONENTS-------------------------------//

const TableSpace = styled.div`
    width: 80%;
    margin: auto;
`

const Table = styled.table`
    width: 80%;
    text-align: center;
    border: 2px solid black;
    border-radius: 5px;
`

const TableHead = styled.thead`
    background-color: black;
    color: white;
    border-radius: 5px;
`


const DeleteButton = styled.button`
    border-radius: 5px;
    box-shadow: inset -3px 6px 5px 0px rgba(249, 21, 25, 0.5);
    margin: 10px;
    background-color: rgb(249, 21, 25);
    color: white;
    height: 2rem;
    width: 6rem;
`


export default function SubjectList() {
    const joinList = useSelector(state => state.joinReducer);
    const dispatch = useDispatch();
    useEffect(() => {dispatch({type:'FETCH_JOIN'})}, []);

    return(
        <TableSpace>
        <Table>
            <TableHead>
                <tr>
                    <th>Subject</th>
                    <th>Total Books</th>
                    <th>&nbsp;</th>
                </tr>
            </TableHead>
            <tbody>
                {joinList.map(s=> 
                    <tr key={s.id}>
                        <td>{s.subject}</td>
                        <td>{s.count}</td>
                        <td>
                            <DeleteButton onClick={() => 
                                {dispatch({type:'ERASE_SUBJECT', payload: s.id}); 
                                dispatch({type:'FETCH_JOIN'})}}>
                                Delete
                            </DeleteButton>
                        </td>
                    </tr>)}
            </tbody>
        </Table>
        </TableSpace>
    )
};