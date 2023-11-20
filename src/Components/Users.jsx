import { useEffect } from "react"
import { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import {Link} from "react-router-dom"
// import { useNavigate } from "react-router-dom"

const Users=()=>{
    let [data,setData]=useState([])

    useEffect(()=>{
        axios.get(` http://localhost:3000/employees `)
.then((res)=>{
    console.log("gotted")
  setData(res.data)
})
.catch(()=>{
    console.log("errrr")
},[])
    })

    let deleteUsers=(x)=>{
        axios.delete(`http://localhost:3000/employees/${x}`)
        window.location.assign("/users")
    }
    // let navigate=useNavigate()
    // navigate("/users")
    return(
        <div id={style.us}>
            {
                data.map((x)=>{
                    return(
                        <div>
                            <table>
                                <tr ><td colSpan={2}><h3>users data</h3></td></tr>
                                <tr>
                                    <td>Name:</td>
                                    <td>{x.eName}</td>
                                </tr>
                                <tr><td>Salary:</td>
                                <td></td>{x.eSal}</tr>
                                <tr><td>Company:</td>
                                <td>{x.eComp}</td></tr>
                                <tr><td><button><Link to={`/edit/${x.id}`}>edit</Link></button></td>
                                <td><button  onClick={()=>{deleteUsers(x.id)}}>delete</button></td></tr>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Users