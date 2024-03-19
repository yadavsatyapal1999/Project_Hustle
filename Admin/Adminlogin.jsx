import { useState } from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Loader from "../Loader/Loader"

export default function Adminlogin(){

    let navigate = useNavigate()
const[data,SetData] = useState({
    email:"",
    password :""
})
const[loader,Setloader] = useState(false)

let onchange = (e,credential) =>{
    SetData({
        ...data,
        [credential] : e.target.value // Identify property dynamically and change value
    })
    }



let mainurl = "https://project-hustlebackend.onrender.com";

    let login = async () =>{
Setloader(true)
        await axios.post(`${mainurl}/admin/admin/login`,data,{
            'Content-Type':'application/json'
        }).then((response)=>{
            //console.log(response.data.token)
            sessionStorage.setItem("token",`${response.data.token}`)
            Setloader(false)
        })
        .then(()=>{
            navigate("/9407800/add");
        })
        .catch((err)=>{
           // console.log(err)
           window.alert("Invalid User and Password")
           Setloader(false);
           
        })

    }
    
return <div className="login">
   {loader== false ?  <form>
        <label htmlFor="userid">User Id</label><br/>
        <input type="mail" id="userid"  onChange={(e)=>{onchange(e,"email")}}  required value={data.email} /><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" id="password"  required onChange={(e)=>{onchange(e,"password")}} value={data.password} /> <br/>
        <button id="submit" type="submit"   onClick={(e)=>{
            e.preventDefault();
            login()
        }} >Submit</button>
    </form> : <div>{<Loader/>}</div>}
</div>

}