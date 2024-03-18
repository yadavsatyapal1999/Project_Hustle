import { useState } from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Adminlogin(){

    let navigate = useNavigate()
const[data,SetData] = useState({
    email:"",
    password :""
})

let onchange = (e,credential) =>{
    SetData({
        ...data,
        [credential] : e.target.value // Identify property dynamically and change value
    })
    }



let mainurl = "https://project-hustlebackend.onrender.com";

    let login = async () =>{

        await axios.post(`${mainurl}/admin/admin/login`,data,{
            'Content-Type':'application/json'
        }).then((response)=>{
            //console.log(response.data.token)
            sessionStorage.setItem("token",`${response.data.token}`)
        })
        .then(()=>{
            navigate("/9407800/add");
        })
        .catch((err)=>{
           // console.log(err)
        })

    }
    
return <div className="login">
    <form>
        <label htmlFor="userid">User Id</label><br/>
        <input type="mail" id="userid"  onChange={(e)=>{onchange(e,"email")}}  required value={data.email} /><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" id="password"  required onChange={(e)=>{onchange(e,"password")}} value={data.password} /> <br/>
        <button id="submit" type="submit"   onClick={(e)=>{
            e.preventDefault();
            login()
        }} >Submit</button>
    </form>
</div>

}