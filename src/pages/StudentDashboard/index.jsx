import { useSelector } from "react-redux"
import EnrolledCard from "../../components/EnrolledCard"
import { useEffect, useState } from "react"
import "./style.css"

const StudentDashBoard = ()=>{
    const {enrolledCourses} = useSelector(state => state.courses)
    const {courses,isEnrolled} = enrolledCourses;
    const [progress,setProgress] = useState(false);

    // reducer to count the completed courses by student------------------
    const completedCount = courses.reduce(
        (count, enrolled) => (enrolled.completed ? count + 1 : count),
        0
    );
   
    // setting the progress bar whenever count changes---------------
    useEffect(()=>{
        if(Math.ceil((completedCount/courses.length) * 100) < 70){
            setProgress(false);
        }
        else{
            setProgress(true)
        }
    },[completedCount])


    console.log('count',completedCount)

    return (
        <div className="dashboard-div">
            <h1>Enrolled Courses</h1>
            
            {/* course card display div---------------- */}
            <div className="enroled-course-div">

                {
                    courses.length != 0   ? (
                        courses.map((enrolled)=>(
                            <EnrolledCard course={enrolled} isEnrolled={isEnrolled}/>
                            
                        ))

                    ):
                    (
                        <p  style={{color:'black',fontWeight:'600'}}>No Courses</p>
                    )
                }
            </div>
            <br></br>
            <div className={progress ? "progress" : 'less-progress'}>
                <h2>Progres Bar</h2>
                <h3>{Math.ceil((completedCount/courses.length)* 100)} % progress</h3>
                <h3>{completedCount} out of {courses.length} Completed</h3>

            </div>
        </div>
    )
}

export default StudentDashBoard