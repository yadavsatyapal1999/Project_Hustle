
import "./Adcontent.css";


export default function Addcontent(){


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