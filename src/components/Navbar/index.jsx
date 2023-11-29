import { User } from "react-feather"
import Searching from "../Search"
import { Link, useNavigate } from "react-router-dom"
import './style.css'

const Navbar = ()=>{
    const navigate = useNavigate()

    // function to handle navigation to student dashboard------------
    function handleDashBoard(){
        navigate("/dashboard")
    }

    // nav bar ----------------------
    return (
        <div className="nav-bar">
            <div>
                <h2>Insta Learner</h2>
            </div>
            <div className="search-user">
                <Link to={'/'} style={{color:'white'}}>Home</Link>
                <User onClick={handleDashBoard}/>
                <Searching/>
            </div>

        </div>
    )
}
export default Navbar