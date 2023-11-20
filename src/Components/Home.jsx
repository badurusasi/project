import {Link} from "react-router-dom"
import style from "./home.module.css"
const Home=()=>{
    return(
        <div id={style.home}>
            <Link to="/">CreateUsers</Link>
            <Link to="/users">Users</Link>
        </div>
    )
}
export default Home