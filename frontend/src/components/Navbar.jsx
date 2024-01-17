import React, { useState, useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from './ThemeContext';
import Icon from "./Icon";
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const { isDarkMode, toggleDarkMode } = useTheme();
    useEffect(() => {
        // Add smooth scrolling behavior
        document.documentElement.style.scrollBehavior = "smooth";
    
        // Add scroll event listener
        window.addEventListener("scroll", () => {
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    
        // Clean up the event listener and reset scroll behavior when component unmounts
        return () => {
            window.removeEventListener("scroll", () => {
                window.scrollY > 0 ? setSticky(true) : setSticky(false);
            });
            document.documentElement.style.scrollBehavior = "auto";
        };
    }, []);

    const menuItems = [
        { name: "Home", link: "" },
        { name: "About", link: "#about"},
        { name: "Courses", link: "#courses" },
        { name: "Take a Quiz", link: "#quiz" },
    ];
    const [open, setOpen] = useState(false);
 
    return (
        <>
            <nav className={isDarkMode ? "dark" : ""}>
                <header className={`bg-[#235191] dark:bg-zinc-800 self-stretch flex items-center justify-between top-0 p-4 px-10 md:px-20 lg:px-28 fixed left-0 z-50 right-0 ${
                sticky ? "bg-gray-800 opacity-85" : ""
}`}>
                    <div className={`flex gap-2 items-center z-[-1] `}>
                        <div>
                            <Icon />
                        </div>
                        <div className="logo text-white font-bold mt-3 text-4xl max-md:max-w-full">
                            EntryHub
                        </div>
                        <BsFillMoonStarsFill onClick={() => toggleDarkMode()} className='cursor-pointer text-white ml-20' />
                    </div>
                    <div className={`hidden lg:flex text-xl text-white  gap-12 `}>
                        <a href="/" className=" hover:text-gray-400 duration-500 hover:scale-110">Home</a>
                        <a href="#about" className=" hover:text-gray-400 duration-500 hover:scale-110">About</a>
                        <a href="#courses" className=" hover:text-gray-400 duration-500 hover:scale-110">Courses</a>
                        <a href="#quiz" className=" hover:text-gray-400 duration-500 hover:scale-110" >Take a Quiz</a>
                    </div>
            

                <div className="lg:hidden">
                    {!open ?
                        (<div onClick={() => setOpen(!open)} className={`items-center flex z-30 cursor-pointer text-white text-xl right-10 top-6 `}> <RiMenu3Line /></div>) :
                        (
                            <GiCrossMark onClick={() => setOpen(!open)} className="text-white cursor-pointer top-10 right-10 md:right-20 fixed z-10" />
                        )}
                    <>
                        <div className={`bg-[#235191] dark:bg-zinc-900 top-0 right-0 fixed  w-96 h-full py-20
            ${open ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>


                            {
                                menuItems.map((link, i) => (
                                    <div
                                    onClick={() => setOpen(!open)}
                                        key={i}
                                        className={`${open ? ' my-10' : 'my-10'
                                            }`}
                                            >
                                        <a href={link.link} className={`hover:text-gray-400 duration-500
                                        ${open ? 'text-white font-extrabold flex flex-col items-center ' : 'text-white flex flex-col items-center'}`}>{link.name}</a>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                </div>
                            </header>
    
                
            </nav>
        </>
    )
}

export default Navbar