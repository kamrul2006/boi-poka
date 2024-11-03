import { Link } from "react-router-dom";
import { FaHome, FaBook, FaUser, FaChartPie, FaCog, FaPenNib } from "react-icons/fa";
import { BiSolidLogIn } from "react-icons/bi";

const NavBar = () => {
    const links = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li> <Link to='/explore'>Explore</Link>
        </li>
        <li>
            <Link to='/explore/listedBook'>Listed Books</Link>
        </li>
        <li>
            <Link to="./about">About</Link>
        </li>

        <li> <Link to="/dashboard">Dashboard</Link></li>
    </>

    return (
        <div className=" md:h-screen md:fixed">
            <div className="sticky top-0 md:hidden">
                <div className="navbar backdrop-blur-md bg-white/20 px-5 md:px-10">
                    <div className="navbar-start sticky top-0">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                                <img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/163-512.png" className="w-7" />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <div className="border md:border-none px-2 rounded-3xl md:px-0 flex items-center gap-2 md:gap-5">
                            <img src="https://img.icons8.com/nolan/64/books-1.png" className=" md:w-16 w-9 mx-auto" />
                            <Link className=" md:text-5xl font-serif font-bold md:block " to="/">Boi Poka</Link>
                        </div>

                    </div>
                    <div className="navbar-end gap-2">
                        <button className="btn btn-error text-white btn-xs md:btn-md">Login</button>
                        <button className="btn btn-warning btn-xs md:btn-md">Sign Up</button>
                    </div>
                </div>
            </div>

            <aside className="w-64 h-full bg-indigo-600 text-white hidden md:flex flex-col ">
                <div className="text-center flex items-center gap-4 px-3 py-4 text-2xl font-bold">
                    <img src="https://img.icons8.com/nolan/64/books-1.png" className=" md:w-10 bg-white rounded-full" />
                    Boi Poka
                </div>
                <nav className="flex-1">
                    <ul>
                        <Link to="/">
                            <li className="p-4 flex items-center gap-3 hover:bg-indigo-700 cursor-pointer">
                                <FaHome />
                                Home
                            </li>
                        </Link>

                        <Link to='/explore'>
                            <li className="p-4 flex items-center gap-3 hover:bg-indigo-700 cursor-pointer">
                                <FaUser />
                                Explore
                            </li>
                        </Link>
                        <Link to='/explore/listedBook'>
                            <li className="p-4 flex items-center gap-3 hover:bg-indigo-700 cursor-pointer">
                                <FaBook />
                                Listed Books
                            </li>
                        </Link>
                        <Link to="./about">
                            <li className="p-4 flex items-center gap-3 hover:bg-indigo-700 cursor-pointer">
                                <FaCog />
                                About
                            </li>
                        </Link>
                        <Link to="/dashboard">
                            <li className="p-4 flex items-center gap-3 hover:bg-indigo-700 cursor-pointer">
                                <FaChartPie />
                                Dashboard
                            </li>
                        </Link>
                        <li className="p-4 flex items-center gap-3 btn mt-36 mx-4 btn-success cursor-pointer">
                            <BiSolidLogIn />
                            Log In
                        </li>  <li className="p-4 flex items-center gap-3 btn mx-4 mt-3 btn-error cursor-pointer">
                            <FaPenNib />
                            Sign up
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default NavBar;