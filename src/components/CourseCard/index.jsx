import { useDispatch } from 'react-redux'
import './style.css'
import { selectedCourse } from '../../redux/actions/courseFetchingSlice';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'react-feather';

const CourseCard = ({course ,isEnrolled})=>{
    const dispatch = useDispatch();
    const navigate = useNavigate()

    function handleCourse(){
        navigate('/selectedcourse')
        dispatch(selectedCourse(course))
    }

    return (
        <div className="course-card">
            
            <div className='name-inst'>
                <h2>{course.name}</h2>
                <p>Instructor: {course.instructor}</p>

            </div>

            <button onClick={handleCourse} >{isEnrolled ? `mark as done` : 'view course'}</button>

        </div>
    )
}
export default CourseCard