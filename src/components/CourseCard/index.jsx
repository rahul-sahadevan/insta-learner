import { useDispatch } from 'react-redux'
import { selectedCourse } from '../../redux/actions/courseFetchingSlice';
import { useNavigate } from 'react-router-dom';
import './style.css'

// this is the card that is displayed in the scrollbar list ---------------------
const CourseCard = ({course ,isEnrolled})=>{
    const dispatch = useDispatch();
    const navigate = useNavigate()

    // function handle to navigate to the course details page on click---------
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

            <button onClick={handleCourse} >
                {isEnrolled ? `mark as done` : 'view course'}
            </button>

        </div>
    )
}
export default CourseCard