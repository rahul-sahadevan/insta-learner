import { useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { complete } from '../../redux/actions/courseFetchingSlice'

const EnrolledCard = ({course})=>{
    const [count,setCount] = useState(0)
    const [mark,setMark] = useState(false)
    const {completed} = useSelector(state => state.courses)
    const dispatch = useDispatch();

    console.log(completed,count)

    function handleComplete(){
        if(mark === false){
            setMark(true)
            setCount(count+1)
            dispatch(complete(true))
        }
        else{
            setMark(false)
            setCount(count-1)
            dispatch(complete(false))
        }
    }
    return(
        <div className="enrolled-card">
            <div className='image-div'>
                <img src={course.thumbnail}></img>
            </div>
            <div>
                <h3>{course.name}</h3>
                <p>Instructor: {course.instructor}</p>
                <p>Duration: {course.duration}</p>
                <button className={mark ? 'complete' : 'not-complete'} onClick={handleComplete}>{mark ? 'Completed' : 'Not Completed'}</button>
            </div>
    
           
        </div>
    )
}

    
export default EnrolledCard