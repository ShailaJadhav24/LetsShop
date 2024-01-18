import { useNavigate } from "react-router-dom"

function NotFound() {
    const navigate = useNavigate()

    const navigateHome = () =>{
        navigate('/')
    }

    return (
        <div className="pageNotFound">
            <h1>404 Not Found</h1>
            <span>Your visited page not found.You may go Home Page.</span>
            <button className="backHomebtn" onClick={navigateHome}>Back to Home Page</button>
        </div>

    )
}
export default NotFound