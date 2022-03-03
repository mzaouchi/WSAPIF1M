import { Link } from "react-router-dom"

const NavbarUser=({auth,setAuth})=>{
    return(
        <div>
            <ul>
                {/* <li><Link to='/'>Home</Link></li>
                <li><Link to='/users'>Users</Link></li>
                <li onClick={()=>setAuth(!auth)} ></li> */}

                {
                    auth ?
                    <div>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/users'>Users</Link></li>
                        <li onClick={()=>setAuth(!auth)} >LogOut</li>
                    </div> 
                    :
                    <div>
                    <li><Link to='/'>Home</Link></li>
                    <li onClick={()=>setAuth(!auth)} >LogIn</li>
                </div> 
                }
            </ul>
        </div>
    )
}

export default NavbarUser