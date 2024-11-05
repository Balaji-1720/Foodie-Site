import { Outlet,Link } from "react-router-dom";

function Demo(){
    
    return(
        <>
        <nav className=" navbar w-100 ">
           
        <ul className="child ">
            <li ><Link className="home" style={{textDecoration:"none",color:"white" }} to="/">Home</Link></li>
            <li ><Link className="about"  style={{textDecoration:"none",color:"white"}} to="/About">About</Link></li>
            <li><Link className="menu" style={{textDecoration:"none",color:"white"}} to="/Menu">Menu</Link></li>
            <li><Link className="contact" style={{textDecoration:"none",color:"white"}} to="/Contact">Contact</Link></li>


        </ul>
        </nav>
        <Outlet/>
        </>
    
    )
     
}

export default Demo;