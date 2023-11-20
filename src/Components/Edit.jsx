import style from "./home.module.css"
import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState  } from "react"
import { useNavigate } from "react-router-dom"
const Edit=()=>{
    let obj=useParams()
    let [name,setName]=useState("")
    let [sal,setSal]=useState("")
    let [comp,setComp]=useState("")
    let navigate=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salData=(e)=>{
        setSal(e.target.value)
    }
    let compData=(e)=>{
        setComp(e.target.value)
    }
    let formHandle=(e)=>{
e.preventDefault()
let payload={
    eName:name,
    eSal:sal,
    eComp:comp
}

navigate("/")
axios.put(`http://localhost:3000/employees/${obj.xyz}`,payload)
.then(()=>{
    console.log("UPDATED")
})
.catch(()=>{
    console.log("ERRRRR")
})

    }



    // let [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3000/employees/${obj.xyz}`)
        .then((response)=>{
            setName(response.data.eName)
            setComp(response.data.eComp)
            setSal(response.data.eSal)

        })
        .catch(()=>{
            console.log("error")
        })
    })
    return(
        <div id={style.cr}>
            <form action="">
                <h3>CREATE USERS</h3>
                <label htmlFor="" >Name:</label>
                <input type="text"  value={name} onChange={nameData} /><br />
                <label htmlFor="">Salary:</label>
                <input type="text" value={sal} onChange={salData} /><br />
                <label htmlFor="">Company:</label>
                <input type="text" value={comp} onChange={compData}   /><br />
                <button onClick={formHandle}>Submit</button>
            </form>
        </div>
    )
}
export default Edit