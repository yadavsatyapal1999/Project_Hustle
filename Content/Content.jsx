import { useState, useEffect } from "react";
import "./content.css";
import axios from "axios";

export default function Content() {
  const url = "https://project-hustlebackend.onrender.com";
const[post,setPost] = useState();
const[count,Setcount] = useState(0)
  const fetchData = async () => {
    try {
      let response = await axios.get(url);
      let data = response.data.data;
      setPost(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      
    }
  };
//console.log(post)

  useEffect(() => {

    fetchData()
    
  }, []); // useEffect will run when confirmShown changes

  return (
    <div id="content">
        {post != undefined || post != null ? <div>
            <div id="heading">{post[count].heading}</div>
      
      <div id="contentandad">
        <img src={post[count].link} alt="error" />
        {/* Image for news to be displayed */}
        <div className="content">{/* Content to be Placed*/}
        {post[count].content}
        </div>
        
      </div>
      
      <div id="btn" >
        <button onClick={()=>{
          if(count==0){
            window.location.reload()
          }else{
            Setcount(count-1);
          }
        }} >{count ==0 ? "Refresh" : "Previous"}</button>
        <button onClick={()=>{
          if(count==9){
            window.location.reload()
            Setcount(0)
          }else{
            Setcount(count+1);
          }
        }}>{count ==9 ? "Refresh" : "Next"}</button>
      </div>
        </div> : <h1>We will update soon</h1>}
      
    </div>
  );
}
