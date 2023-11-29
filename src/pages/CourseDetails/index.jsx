import { useDispatch, useSelector } from "react-redux"
import './style.css'
import { useState } from "react"
import {ChevronDown } from "react-feather"
import { enrolledCourse } from "../../redux/actions/courseFetchingSlice"


const CourseDetails = ()=>{

    const [active,setActive] = useState(false)
    const {individualCourse,enrolledCourses} = useSelector(state => state.courses)
    const {courses,isEnrolled} = enrolledCourses
    const dispatch = useDispatch();
    console.log(individualCourse)

    // function to set the active variable--------
    function handleShow(){
        setActive(!active)
    }
// function to dispatch the enrollement status----------
    function handleEnrollment(){
        dispatch(enrolledCourse({
            courses:individualCourse,
            isEnrolled:true
        }))
    }

    return (
        // header div to show the major details of course--------
        <div className="course-details-div">
            <div className="course-header">
                <div className="head-des">
                    <h1>{individualCourse.name}</h1>
                    <h2>{individualCourse.description}</h2>
                    <h2>Created By: {individualCourse.instructor}</h2>
                    <h3>Mode of Class: {individualCourse.location}</h3>
                    <h3>Enrollment: {individualCourse.enrollmentStatus}</h3>
                    <button onClick={handleEnrollment}>
                        {individualCourse.isEnrolled ? 'Enrolled' : 'Enroll'}
                    </button>

                </div>
                <div className="image-container">
                    <img src={individualCourse.thumbnail}></img>
                </div>

            </div>
            {/* ------------------------------- */}
            {/* created a accordian for the syllabus part--------------- */}
            <div className="accordion" onClick={handleShow}>
                <div className="accordion-title ">
                    <div className="text"><p className="heading">Syllabus</p></div>
                   
                   <ChevronDown 
                        className={active ? 'icon-clicked'  : 'icon'} 
                        style={active ? {transform:'rotate(180deg)'} : {}}
                   />

                </div>
                <div className={`accordion-data ${active ? "show" : ""}`}>
                    {
                        individualCourse.syllabus.map((syllabus)=>(
                            <>
                                <h2>Week {syllabus.week} </h2>
                                <h3>{syllabus.topic}</h3>
                            </>
                        ))
                    }
                </div>
            </div>

            {/* div for schedule and prerequist-------------- */}
            <div className="shedule-div">
                <p className="heading">Course Shedule</p>
                <li>
                    <h2>{individualCourse.schedule}</h2>
                </li>
            </div>

            <div className="shedule-div">
                <p className="heading">Prerequisites</p>
                <ul>
                    {
                        individualCourse.prerequisites.map((req)=>(
                            <li><h2>{req}</h2></li>
                        ))
                    }

                </ul>     
            </div>
        </div>
    )
}
export default CourseDetails