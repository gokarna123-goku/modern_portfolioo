import React from 'react'
import { Link } from "react-router-dom";

const TechCard = ({ Icon, className }) => {
    return (
        <Link to={"/"} className="w-20 h-[5.5rem] flex items-center justify-center bg-neutral-900/20 hover:bg-violet-900/5 rounded-xl border-2 border-neutral-800/80 hover:border-violet-800/80 group ease-in-out duration-300">
            <Icon className={`text-5xl text-neutral-400 ${className} ease-in-out duration-300`} />
        </Link>
    )
}

export default TechCard