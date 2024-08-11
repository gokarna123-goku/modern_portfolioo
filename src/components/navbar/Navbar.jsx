import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();

    const active = location.pathname;
    return (
        <nav className='w-full h-[8ch] bg-neutral-950 shadow-sm border-b border-neutral-900/50 lg:px-80 md:px-16 sm:px-7 px-4 flex items-center justify-between'>
            {/* Logo section */}
            <Link to={"/"} className='flex flex-col'>
                <span className="md:text-[0.65rem] text-[0.5rem] text-neutral-400 -mb-1.5">localhost:</span>
                <h1 className='md:text-2xl text-lg font-bold text-neutral-500 flex'>
                    <span className="text-green-500">3</span>
                    ( <span className="text-green-500">0</span> )
                    <sub className="text-green-500">3</sub>
                </h1>
            </Link>

            {/* Nav contents */}
            <div className='flex items-center gap-8'>
                <ul className="list-none md:text-base text-sm text-neutral-400 font-medium flex items-center md:gap-x-8 gap-x-4">
                    <li>
                        <Link to={"/projects"} className={`hover:text-neutral-500 ease-in-out duration-300 ${active === "/projects" ? "text-green-500" : "text-neutral-400"}`}>Project</Link>
                    </li>
                    <li>
                        <Link to={"/articles"} className={`hover:text-neutral-500 ease-in-out duration-300 ${active === "/articles" ? "text-green-500" : "text-neutral-400"}`}>Article</Link>
                    </li>
                    <li>
                        <Link to={"/me"} className={`hover:text-neutral-500 ease-in-out duration-300 ${active === "/me" ? "text-green-500" : "text-neutral-400"}`}>About Me</Link>
                    </li>
                </ul>

                <Link to={"/"} className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-neutral-900/40 flex items-center justify-center text-neutral-400 text-lg hover:text-neutral-500 ease-in-out duration-300">
                    <FaGithub />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar