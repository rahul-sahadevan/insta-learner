import { useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { complete } from '../../redux/actions/courseFetchingSlice'

const EnrolledCard = ({course})=>{
    // getting course array from the redux store------
    const { courses } = useSelector((state) => state.courses.enrolledCourses);
    console.log(courses)
    // assingning a variable to store wheather the course is completed or not ------------
    const completed = courses.find((c) => c.id === course.id)?.completed || false;
    const dispatch = useDispatch();

// function to handle dispatch of the 'complete' functon in redux -----------
    function handleComplete(){
        const courseId = course.id;
        const isCompleted = !completed;
       
        dispatch(complete({ courseId, isCompleted }));
    }

    // enrolled course card to display the course details------------------
    return(
        <div className="enrolled-card">
            <div className='image-div'>
                <img src={course.thumbnail}></img>
            </div>
            <div>
                <h3>{course.name}</h3>
                <p>Instructor: {course.instructor}</p>
                <p>Duration: {course.duration}</p>
                <button className={completed ? 'complete' : 'not-complete'} onClick={handleComplete}>{completed ? 'Completed' : 'Not Completed'}</button>
            </div>
    
           
        </div>
    )
}

    
export default EnrolledCard