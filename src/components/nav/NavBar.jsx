import { Link } from "react-router-dom";


const NavBar = () => {
    const links = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li> <Link to='/explore'>Explore</Link>
        </li>
        <li>
            <Link to="/product">Products</Link>
        </li>
        <li>
            <Link to="./about">About</Link>
        </li>

        <li> <Link to="/dashboard">Dashboard</Link></li>
    </>

    return (
        <div className="sticky top-0">
            <div className="sticky top-0">
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
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end gap-2">
                        <button className="btn btn-error text-white btn-xs md:btn-md">Login</button>
                        <button className="btn btn-warning btn-xs md:btn-md">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;