import { User } from "react-feather"
import Search from "../Search"
import { useNavigate } from "react-router-dom"
import './style.css'

const Navbar = ()=>{
    const navigate = useNavigate()

    function handleDashBoard(){
        navigate("/dashboard")
    }

    return (
        <div className="nav-bar">
            <div>
                <h2>Insta Learner</h2>
            </div>
            <div className="search-user">
                <Search/>
                <User onClick={handleDashBoard}/>
            </div>

        </div>
    )
}
export default Navbar