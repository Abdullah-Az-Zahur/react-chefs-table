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
                    <div className="form-control mr-2">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <button className="btn rounded-full bg-green-500 text-black"><CgProfile /></button>
                </div>
            </div>

            {/* Banner */}
            <div className="banner ">
                <div className="banner-content">
                    <h1 className=" md:text-4xl font-bold text-white my-4">Discover an exceptional cooking <br />class tailored for you!</h1>
                    <p>Discover a world of culinary delights. From exquisite dishes to welcoming ambiance, every moment is crafted to enchant. Join us for an unforgettable dining experience.</p>
                    <div className="my-2">
                        <button className="btn btn-accent mx-2 rounded-full">Accent</button>
                        <button className="btn btn-outline mx-2 rounded-full">Default</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;