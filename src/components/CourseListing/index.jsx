import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { courseFetcher } from "../../redux/functions/courseFetchingFun";
import CourseCard from "../CourseCard";
import axios from "axios";
import './style.css'


function CourseListing(){
    const {fetchLoading,fetchData,fetchError,actualData} = useSelector(state => state.courses)
    const dispatch = useDispatch();

    const courses = fetchData
    console.log(courses)

    
    useEffect(()=>{
        dispatch(courseFetcher())
    },[])

    return (
        <div className='home-page'>
            <ul className="scrollable-list">
                {
                    courses.map((course)=>(
                        <li>
                            <CourseCard  course={course}/>

                        </li>
                    ))
                }

            </ul>

        </div>
    )
}
export default CourseListing