import React from 'react'
import Layout from '../../components/layout/Layout'
import ProjectCard from '../../components/project/ProjectCard'

import Profile from "../../assets/profile.png";

const Project = () => {
    return (
        <Layout className='md:py-[6ch] py-6 w-full h-auto space-y-12'>
            <div className='space-y-2'>
                <h1 className="text-3xl text-neutral-200 font-bold">
                    My Projects
                </h1>
                <p className="text-base text-neutral-500 font-normal">
                    I design and develope softwares for my clients.
                </p>
            </div>

            {/* Projects */}
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
                <ProjectCard img={Profile} title={"YouTube Code Projects"} desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi eum sapiente magni autem, itaque nobis dolore natus aperiam rem tenetur ducimus atque, ipsa adipisci! Quaerat quidem consequuntur sed reiciendis."} />
                <ProjectCard img={Profile} title={"YouTube Code Projects"} desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi eum sapiente magni autem, itaque nobis dolore natus aperiam rem tenetur ducimus atque, ipsa adipisci! Quaerat quidem consequuntur sed reiciendis."} />
                <ProjectCard img={Profile} title={"YouTube Code Projects"} desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi eum sapiente magni autem, itaque nobis dolore natus aperiam rem tenetur ducimus atque, ipsa adipisci! Quaerat quidem consequuntur sed reiciendis."} />
                <ProjectCard img={Profile} title={"YouTube Code Projects"} desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi eum sapiente magni autem, itaque nobis dolore natus aperiam rem tenetur ducimus atque, ipsa adipisci! Quaerat quidem consequuntur sed reiciendis."} />
                <ProjectCard img={Profile} title={"YouTube Code Projects"} desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi eum sapiente magni autem, itaque nobis dolore natus aperiam rem tenetur ducimus atque, ipsa adipisci! Quaerat quidem consequuntur sed reiciendis."} />
                <ProjectCard img={Profile} title={"YouTube Code Projects"} desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi eum sapiente magni autem, itaque nobis dolore natus aperiam rem tenetur ducimus atque, ipsa adipisci! Quaerat quidem consequuntur sed reiciendis."} />
                <ProjectCard img={Profile} title={"YouTube Code Projects"} desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi eum sapiente magni autem, itaque nobis dolore natus aperiam rem tenetur ducimus atque, ipsa adipisci! Quaerat quidem consequuntur sed reiciendis."} />
                <ProjectCard img={Profile} title={"YouTube Code Projects"} desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi eum sapiente magni autem, itaque nobis dolore natus aperiam rem tenetur ducimus atque, ipsa adipisci! Quaerat quidem consequuntur sed reiciendis."} />
            </div>

        </Layout>
    )
}

export default Project