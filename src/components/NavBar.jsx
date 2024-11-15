import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
const NavBar = () => {
    return (
        <div className="flex justify-between">
            <div></div>
            <div className="space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="flex gap-3 items-center">
                <div><img src={userIcon} alt="" /></div>
                <button className="btn btn-neutral">Login</button>
            </div>
            
        </div>
    );
};

export default NavBar;