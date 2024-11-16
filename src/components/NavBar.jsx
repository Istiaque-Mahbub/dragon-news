import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const NavBar = () => {
    const {user,logOut} = useContext(AuthContext);
    return (
        <div className="flex justify-between">
            <div>{user && user.email}</div>
            <div className="space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="flex gap-3 items-center">
                {
                    user && user?.email ?
                    (<div><img className="w-10 rounded-full" src={user.photoURL} alt="" />
                    <p>{user.displayName}</p>
                    </div>
                        
                    ) 
                    : 
                    (<div><img src={userIcon} alt="" /></div>)
                }
                
                {
                    user && user?.email? 
                     <button onClick={logOut} className="btn btn-neutral">Log-Out</button>
                    : 
                    <Link to={'/auth/login'} className="btn btn-neutral">Login</Link>
                }
                
            </div>
            
        </div>
    );
};

export default NavBar;