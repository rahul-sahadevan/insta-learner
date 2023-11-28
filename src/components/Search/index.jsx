
import { useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { searchResult } from '../../redux/actions/courseFetchingSlice';

const Search = ()=>{
    const dispatch = useDispatch();


    return(
        <div className="search-div">
            <input type="text"  onChange={(e)=> dispatch(searchResult(e.target.value))} placeholder="Search by course or instructor" className="input-field"></input>
        </div>
    )
}

export default Search