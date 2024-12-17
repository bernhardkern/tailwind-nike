// noinspection JSValidateTypes

import {headerLogo} from "../assets/images";
import {navLinks} from "../constants";
import {hamburger} from "../assets/icons/index.js";

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={30}/>
                </a>
                <ul className="flex-1 justify-center items-center gap-16 hidden lg:flex">
                    {navLinks.map((item) => (
                        <li key={item.id} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</li>
                    ))}
                </ul>
                <div className="lg:hidden">
                    <img src={hamburger} alt="Menu"  width={30} height={30} className="cursor-pointer"/>
                </div>
            </nav>
        </header>
    )
};

export default Nav;
