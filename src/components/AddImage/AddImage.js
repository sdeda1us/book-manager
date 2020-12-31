import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import ImageList from '../ImageList/ImageList';
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



export default function AddImage () {
    //imports redux state for books
    const bookList = useSelector(state => state.bookReducer);

    return(
        <TableSpace>
            <Table>
                <TableHead>
                    <tr>
                        <th>Book</th>
                        <th>Image URL</th>
                        <th>&nbsp;</th>
                    </tr>
                </TableHead>
                <tbody>
                    {bookList.map((book) => <ImageList book={book}/>)}
                </tbody>
            </Table>
        </TableSpace>
    )
}