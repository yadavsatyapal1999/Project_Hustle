
import { useNavigate } from "react-router";
import "./Adcontent.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader"

export default function Addcontent(){
    const[post,SetPost] = useState({
        heading:"",
        imglink:"",
        content:""
    })
const[loader,Setloader] = useState(false)

    let navigate = useNavigate();
    let token = sessionStorage.getItem('token') ;

useEffect(()=>{
    if( token  == null  || token == undefined){
        navigate('/9407800');
    }
   // console.log(token)
   // console.log(post)
},[])

    let addpost = async ()=>{
        try {

            Setloader(true)
            const response = await axios.post(
                'https://project-hustlebackend.onrender.com/new/post',
                post,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${token}`
                    }
                }
            );
            //console.log(response.data);
            window.location.reload();
            Setloader(true)
        } catch (error) {
            console.error('There was an error!', error);
            alert("An Error Occurred");
        }
    }


return <div className="adcontent" >
 {loader == false ?    <form>
    <label htmlFor="head">Headings</label><br/>
    <textarea  required className="inpt" id="head"  value={post.heading} onChange={(e)=>{
        SetPost({
            ...post,
            heading:e.target.value
        })
    }} />
    <br/>
    <label htmlFor="imglink">Image Link</label>
    <input type="text" id="imglink"  required    onChange={(e)=>{
        SetPost({
            ...post,
            imglink:e.target.value
        })
    } 
    } value={post.imglink} />
    <br/>
    <label htmlFor="contento">Content</label><br/>
    <textarea className="inpt" id="contento" required  value={post.content}  onChange={(e)=>{
        SetPost({
            ...post,
            content:e.target.value
        })
    }} /><br/>
    <button id="btno" type="submit" onClick={(e)=>{
        e.preventDefault();
        addpost()
    }} >Submit</button>
    </form> : <div>{<Loader/>}</div>}
</div>

}