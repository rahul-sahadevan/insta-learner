
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { Search } from 'react-feather';
import { searchResult } from '../../redux/actions/courseFetchingSlice';

const Searching = ()=>{
    // search componet to handle searching just type the keyword 
    // in the input field the search function will be done in redux
    const dispatch = useDispatch();
    return(
        <div className="search-div">
            <Search/>
            {/* dispatching the input value onchanging----------- */}
            <input type="text"  onChange={(e)=> dispatch(searchResult(e.target.value))} placeholder="Search by course or instructor" className="input-field"></input>
        </div>
    )
}

export default Searching