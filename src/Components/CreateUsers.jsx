import { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreateUsers=()=>{
    let [name,setName]=useState("")
    let [sal,setSal]=useState("")
    let [comp,setComp]=useState("")

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salData=(e)=>{
        setSal(e.target.value)
    }
    let compData=(e)=>{
        setComp(e.target.value)
    }

    let navigate=useNavigate()
    let formHandler=(e)=>{
e.preventDefault()
setComp(e.target.value)
setSal(e.target.value)
setName(e.target.value)
navigate("/users")

let payload={
    eName:name,
    eSal:sal,
    eComp:comp
}

axios.post(` http://localhost:3000/employees`,payload)
.then(()=>{
    console.log("gotted")
})
.catch(()=>{
    console.log("errrr")
})

    }

    return(
        <div id={style.cr}>
            <form action="">
                <h3>CREATE USERS</h3>
                <label htmlFor="" >Name:</label>
                <input type="text" value={name} onChange={nameData}  /><br />
                <label htmlFor="">Salary:</label>
                <input type="text" value={sal} onChange={salData} /><br />
                <label htmlFor="">Company:</label>
                <input type="text" value={comp} onChange={compData}  /><br />
                <button onClick={formHandler}>Submit</button>
            </form>
        </div>
    )
}
export default CreateUsers