
import { useNavigate } from "react-router";
import "./Adcontent.css";
import { useEffect } from "react";


export default function Addcontent(){
    let navigate = useNavigate();
    let token = sessionStorage.getItem('token') ;
    console.log(token);

useEffect(()=>{
    if( token  == null  || token == undefined){
        navigate('/9407800');
    }
},[])

    let addpost = ()=>{
        
    }

return <div className="adcontent" >
    <form>
    <label htmlFor="head">Headings</label><br/>
    <textarea  className="inpt" id="head"/>
    <br/>
    <label htmlFor="imglink">Image Link</label>
    <input type="text" id="imglink"/>
    <br/>
    <label htmlFor="contento">Content</label><br/>
    <textarea className="inpt" id="contento"/><br/>
    <button id="btno" type="submit" onClick={(e)=>{
        e.preventDefault();
    }} >Submit</button>
    </form>
</div>

}