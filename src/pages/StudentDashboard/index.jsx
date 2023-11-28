import { useSelector } from "react-redux"
import "./style.css"
import CourseCard from "../../components/CourseCard"
import EnrolledCard from "../../components/EnrolledCard"

const StudentDashBoard = ()=>{
    const {enrolledCourses} = useSelector(state => state.courses)
    const {courses,isEnrolled} = enrolledCourses;
    console.log(enrolledCourses)

    return (
        <div className="dashboard-div">
            <h1>Enrolled Courses</h1>
            <div className="enroled-course-div">

                {
                    courses.map((enrolled)=>(
                        <EnrolledCard course={enrolled} isEnrolled={isEnrolled}/>
                        
                    ))
                }
            </div>
        </div>
    )
}

export default StudentDashBoard