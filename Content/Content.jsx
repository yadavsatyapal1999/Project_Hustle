import { useState, useEffect } from "react";
import "./content.css";
import axios from "axios";

export default function Content() {
  const url = "https://project-hustlebackend.onrender.com";
const[post,setPost] = useState()
//console.log(post)
  const fetchData = async () => {
    try {
      let response = await axios.get(url);
      let data = response.data.data;
      setPost(data);
      console.log(data)
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Call the fetchData function on component mount
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div id="content">
        {post != undefined || post != null ? <div>
            <div id="heading">{post[0].heading}</div>
      <div className="adspace">
        <img src="" alt="error" />
        {/* Ad space first */}
      </div>
      <div id="contentandad">
        <img src={post[0].link} alt="error" />
        {/* Image for news to be displayed */}
        <div className="content">{/* Content to be Placed*/}
        {post[0].content}
        </div>
        <div className="adspace2">{/* Ad space second */}</div>
      </div>
      <div className="adspace">
        <img src="" alt="error" />
        {/* Ad space 3rd */}
      </div>
        </div> : <h1>We will update soon</h1>}
      
    </div>
  );
}
