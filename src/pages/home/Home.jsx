import { Link } from "react-router-dom";

import { SiDjango } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { HiOutlineDownload } from "react-icons/hi";
import { FaReact, FaWordpressSimple } from "react-icons/fa6";

import Profile from "../../assets/profile.png";

import Layout from '../../components/layout/Layout'
import TechCard from '../../components/tech/TechCard'
import ProjectCard from "../../components/project/ProjectCard";
import ArticleCard from "../../components/article/ArticleCard";

const Home = () => {
    return (
        <Layout className='md:py-[14ch] py-6 w-full h-auto space-y-28'>
            {/* Intro section */}
            <div className="w-full flex items-center justify-between gap-14 flex-wrap">
                <div className="flex-1 h-auto space-y-10">
                    <h1 className="text-5xl text-neutral-100 font-bold">
                        Hey, I'm <span className="text-violet-500">G-Tech</span>
                    </h1>
                    <div className="space-y-6 md:pr-16 pr-0">
                        <p className="text-lg text-neutral-400 font-normal">
                            We are a Website developer who makes YouTube code projects and provides a free tutorial.
                        </p>
                        <p className="text-lg text-neutral-400 font-normal">
                            In my <Link to={"https://www.youtube.com/@g-techofficial"} target="_blank" className="inline-flex text-red-500">youtube channel</Link>, you can find lots of coding projects videos with free tutorials, sources codes, and about our ORG.
                        </p>
                    </div>
                    <a href="" download={true} className="w-fit px-8 h-11 bg-neutral-900/50 shadow rounded-xl text-base text-neutral-100 font-normal flex items-center justify-center gap-x-2">
                        Resume <HiOutlineDownload />
                    </a>
                </div>
                <div className="md:w-1/3 w-full h-auto flex justify-center items-center">
                    <div className="relative w-full aspect-square rounded-full glow-border">
                        <div className="absolute inset-0 rounded-full border-[6px] border-transparent animate-rotate-border" />
                        <img src={Profile} alt="profile img" className="w-full h-full rounded-full object-contain relative scale-110 bottom-3 right-2 z-10" />
                    </div>
                </div>
            </div>

            {/* Some top Tech highlights */}
            <div className="w-full space-y-8">
                <h1 className="text-3xl text-neutral-200 font-bold">
                    Top Tech Highlights
                </h1>
                <div className="flex items-center gap-6 flex-wrap">
                    <TechCard Icon={FaReact} className="group-hover:text-blue-700" />
                    <TechCard Icon={RiNextjsLine} className="group-hover:text-neutral-700" />
                    <TechCard Icon={SiDjango} className="group-hover:text-emerald-700" />
                    <TechCard Icon={FaWordpressSimple} className="group-hover:text-teal-700" />
                </div>
            </div>

            {/* Projects */}
            <div className="w-full space-y-8">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-3xl text-neutral-200 font-bold">
                        Projects
                    </h1>
                    <Link to={"/products"} className="text-base text-neutral-400 font-normal">
                        View All
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
                    <ProjectCard img={Profile} title={"YouTube Code Projects"} desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi eum sapiente magni autem, itaque nobis dolore natus aperiam rem tenetur ducimus atque, ipsa adipisci! Quaerat quidem consequuntur sed reiciendis."} />
                    <ProjectCard img={Profile} title={"YouTube Code Projects"} desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi eum sapiente magni autem, itaque nobis dolore natus aperiam rem tenetur ducimus atque, ipsa adipisci! Quaerat quidem consequuntur sed reiciendis."} />
                    <ProjectCard img={Profile} title={"YouTube Code Projects"} desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi eum sapiente magni autem, itaque nobis dolore natus aperiam rem tenetur ducimus atque, ipsa adipisci! Quaerat quidem consequuntur sed reiciendis."} />
                    <ProjectCard img={Profile} title={"YouTube Code Projects"} desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi eum sapiente magni autem, itaque nobis dolore natus aperiam rem tenetur ducimus atque, ipsa adipisci! Quaerat quidem consequuntur sed reiciendis."} />
                </div>
            </div>

            {/* Blogs */}
            <div className="w-full space-y-8">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-3xl text-neutral-200 font-bold">
                        Featured Article
                    </h1>
                    <Link to={"/blogs"} className="text-base text-neutral-400 font-normal">
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <ArticleCard img={"https://cdn.pixabay.com/photo/2015/10/02/15/00/diary-968592_1280.jpg"} title={"How to setup the react project with Tailwind css?"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam."} date={"August 08, 2024"} time={"5 min read"} />
                    <ArticleCard img={"https://cdn.pixabay.com/photo/2015/10/02/15/00/diary-968592_1280.jpg"} title={"How to setup the react project with Tailwind css?"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam."} date={"August 08, 2024"} time={"5 min read"} />
                </div>
            </div>
        </Layout>
    )
}

export default Home