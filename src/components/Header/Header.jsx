import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import mainLogo from '../../assets/about-page-logo.png';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(res => console.log("Sign Out Successful", res))
            .catch(err => console.log(err))
    }

    const navLinks = <>
        <li><NavLink className="" to='/'>Home</NavLink></li>
        <li><NavLink className="ml-4" to='/allTouristSpot'>All Tourist Spot</NavLink></li>
        <li><NavLink className="ml-4" to='/myList'>My List</NavLink></li>
        <li><NavLink className="ml-4" to='/aboutUs'>About Us</NavLink></li>
        <li><NavLink className="ml-4" to='/contactUs'>Contact Us</NavLink></li>
    </>
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='w-[200px]' src={mainLogo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <>
                        <div>
                            <a id="clickable">
                                <div className='w-10 h-10'>
                                    <img className='rounded-full w-16 h-14 mr-2 bg-white p-1' src={user.photoURL} alt="" />
                                </div>
                            </a>
                            {/* bg-[#AFC4DD] */}
                            <Tooltip className='' anchorSelect="#clickable" clickable>
                                <div className='flex flex-col'>
                                    <p className='mb-3 bg-[#AFC4DD] text-[#ff9123] font-bold p-3 rounded-xl'>{user.displayName}</p>
                                    <Link to="/myAccount"><button className='mb-3 bg-[#AFC4DD] text-[#000] p-3 rounded-xl'>My Account</button></Link>
                                    <button onClick={handleSignOut} className='mb-3 btn btn-success text-[#000] p-3 rounded-xl'>Logout</button>
                                </div>
                            </Tooltip>
                        </div>
                    </>
                        : <>
                            <Link className='btn btn-success text-white' to="/login">Login</Link>
                            <Link className='btn btn-success text-white ml-4' to="/register">Register</Link>
                        </>

                    }


                </div>
            </div>
        </div>
    );
};

export default Header;