
import "./login.css"


export default function Adminlogin(){

    
return <div className="login">
    <form>
        <label htmlFor="userid">User Id</label><br/>
        <input type="mail" id="userid"/><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" id="password"/> <br/>
        <button type="submit">Submit</button>
    </form>
</div>

}