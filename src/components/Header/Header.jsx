import { CgProfile } from "react-icons/cg";
import './Header.css';

const Header = () => {
    return (
        <div className="container mx-auto">
            {/* Nav Bar */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-4xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="input input-bordered flex items-center gap-2 mx-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <button className="btn rounded-full bg-green-500 text-black"><CgProfile /></button>
                </div>
            </div>

            {/* Banner */}
            <div className="banner ">
                <div className="banner-content">
                    <h1 className=" md:text-4xl font-bold text-white my-4">Discover an exceptional cooking <br />class tailored for you!</h1>
                    <p>Discover a world of culinary delights. From exquisite dishes to welcoming ambiance, every moment is crafted to enchant. Join us for an unforgettable dining experience.</p>
                    <div className="my-2">
                        <button className="btn btn-accent mx-2 rounded-full">Explore Now</button>
                        <button className="btn btn-outline mx-2 rounded-full">Our Feedback</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;