import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ img, title, desc }) => {
    return (
        <Link to={"/projects"} className="w-full flex items-center bg-transparent gap-x-3 hover:shadow-md hover:bg-green-900/5 border border-transparent hover:border-green-800/30 py-3 px-0 hover:px-3 rounded-lg ease-in-out duration-500">
            <div className="w-16 h-16 rounded-lg bg-neutral-900/60 flex items-center justify-center p-1">
                <img src={img} alt="" className="w-full h-full object-contain object-center rounded-lg" />
            </div>
            <div className="space-y-0.5 flex-1">
                <h1 className="text-base text-neutral-300 font-medium">
                    {title}
                </h1>
                <small className="text-xs text-neutral-500 font-light line-clamp-1">
                    {desc}
                </small>
            </div>
        </Link>
    )
}

export default ProjectCard