import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { courseFetcher } from "../../redux/functions/courseFetchingFun";
import CourseCard from "../CourseCard";
import './style.css'

// this is the course listing componets to show course in the home page------------
function CourseListing(){
    // course data from the redux store----------
    const {fetchData} = useSelector(state => state.courses)
    const dispatch = useDispatch();

    const courses = fetchData
    console.log(courses)

    // display the courses on the load --------------
    useEffect(()=>{
        dispatch(courseFetcher())
    },[])
// jsx for the component-------------------
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