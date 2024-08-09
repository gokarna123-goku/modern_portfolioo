import React from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from 'react-router-dom'
import { FaArrowRightLong, FaReact, FaWordpressSimple } from 'react-icons/fa6'
import TechCard from '../../components/tech/TechCard'
import { RiNextjsLine } from 'react-icons/ri'
import { SiDjango } from 'react-icons/si'
import { LiaHandPointer } from "react-icons/lia";

import AboutImg from "../../assets/about.png"

const About = () => {
    return (
        <Layout className='md:py-[7ch] py-6 w-full h-auto space-y-16'>
            {/* Intro section */}
            <div className='space-y-8'>
                <h1 className="text-5xl text-neutral-200 font-bold">
                    About Me
                </h1>
                <div className="space-y-5">
                    <div className="w-full flex items-center gap-14 flex-wrap">
                        <div className="md:w-64 w-full h-auto flex items-center justify-center border border-neutral-900/40 bg-neutral-900/20 rounded-lg">
                            <img src={AboutImg} alt="" className="w-full aspect-square rounded-xl object-cover object-center" />
                        </div>
                        <div className="flex-1 space-y-5">
                            <p className="text-lg text-neutral-500 font-normal">
                                Hey, We are G-Tech Official Organization. We have been working on the software industry since 2022 and we are doing it on remote work. We have also a YouTube channel for the websites tutorial. Our Organization work based on the clients and their requirements.
                            </p>
                            <p className="text-lg text-neutral-500 font-normal">
                                My website is free of ads, affiliate links, tracking, analytics, sponsored posts, and paywalls. I created it as a platform for self-expression and to share my knowledge with the world.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between bg-green-900/5 border border-green-900/60 hover:border-green-900/80 md:px-6 px-3 py-3 rounded-lg group cursor-pointer">
                        <p className="md:text-lg text-sm text-neutral-400 font-normal">
                            I am available for remote work.
                        </p>
                        <Link to={"/"} className="flex items-center gap-x-2 md:text-lg text-base text-neutral-500 group-hover:text-green-600 font-normal ease-in-out duration-300">
                            Hire me <FaArrowRightLong className='group-hover:translate-x-1 ease-in-out duration-300' />
                        </Link>
                    </div>
                    <p className="text-lg text-neutral-500 font-normal">
                        Very soon we will be launching the AI powered website for solving the real world problems.
                        My hope is to encourage others to carve out their own creative space online, contributing to the fight against the degradation of the internet.
                        I don't post too often, so feel free to subscribe to the RSS feed for updates when I do.
                    </p>
                </div>

                {/* Contact data */}
                <div className="space-y-4">
                    <h1 className="text-3xl text-neutral-200 font-bold">
                        Contact
                    </h1>

                    <div className="space-y-3">
                        <div className="flex items-center gap-x-3">
                            <LiaHandPointer className='text-lg text-green-500 rotate-90' />
                            <p className="md:block hidden text-base text-neutral-400 font-normal">
                                Email Address:
                            </p>
                            <Link to={"mailto:gtech.official08@gmail.com"} className="text-lg text-neutral-500 hover:text-green-600 font-normal ease-in-out duration-300">
                                gtech.official08@gmail.com
                            </Link>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <LiaHandPointer className='text-lg text-green-500 rotate-90' />
                            <p className="md:block hidden text-base text-neutral-400 font-normal">
                                Instagram Handle:
                            </p>
                            <Link to={"https://www.instagram.com/gtech.official08/"} target='_blank' className="text-lg text-neutral-500 hover:text-green-600 font-normal ease-in-out duration-300">
                                gtech.official08
                            </Link>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <LiaHandPointer className='text-lg text-green-500 rotate-90' />
                            <p className="md:block hidden text-base text-neutral-400 font-normal">
                                GitHub:
                            </p>
                            <Link to={"https://github.com/gtech-official08"} className="text-lg text-neutral-500 hover:text-green-600 font-normal ease-in-out duration-300">
                                gtech-official08
                            </Link>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <LiaHandPointer className='text-lg text-green-500 rotate-90' />
                            <p className="md:block hidden text-base text-neutral-400 font-normal">
                                YouTube Channel:
                            </p>
                            <Link to={"https://www.youtube.com/@g-techofficial"} target='_blank' className="text-lg text-neutral-500 hover:text-green-600 font-normal ease-in-out duration-300">
                                g-techofficial
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* tech section */}
            <div className="w-full space-y-8">
                <h1 className="text-3xl text-neutral-200 font-bold">
                    Tech Skills
                </h1>
                <div className="flex items-center gap-6 flex-wrap">
                    <TechCard Icon={FaReact} className="group-hover:text-blue-700" />
                    <TechCard Icon={RiNextjsLine} className="group-hover:text-neutral-700" />
                    <TechCard Icon={SiDjango} className="group-hover:text-emerald-700" />
                    <TechCard Icon={FaWordpressSimple} className="group-hover:text-teal-700" />
                </div>
            </div>
        </Layout>
    )
}

export default About