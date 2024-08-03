import { FaReact, FaWordpressSimple } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { SiDjango } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className='w-full md:py-0 py-6 h-auto space-y-28'>
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
                <div className="md:w-1/3 w-full h-auto">
                    <img src="https://cdn.pixabay.com/photo/2024/02/21/04/13/ai-generated-8586572_1280.jpg" alt="pp" className="w-full aspect-square rounded-full object-contain" />
                </div>
            </div>

            {/* Some top Tech highlights */}
            <div className="w-full space-y-8">
                <h1 className="text-3xl text-neutral-200 font-bold">
                    Tech Highlights
                </h1>
                <div className="flex items-center gap-6 flex-wrap">
                    <Link to={"/"} className="w-20 h-24 flex items-center justify-center bg-neutral-900/20 hover:bg-violet-900/5 rounded-xl border border-neutral-800/80 hover:border-violet-800/80 group ease-in-out duration-300">
                        <FaReact className="text-5xl text-neutral-400 group-hover:text-blue-600 ease-in-out duration-300" />
                    </Link>
                    <Link to={"/"} className="w-20 h-24 flex items-center justify-center bg-neutral-900/20 hover:bg-violet-900/5 rounded-xl border border-neutral-800/80 hover:border-violet-800/80 group ease-in-out duration-300">
                        <SiDjango className="text-5xl text-neutral-400 group-hover:text-emerald-700 ease-in-out duration-300" />
                    </Link>
                    <Link to={"/"} className="w-20 h-24 flex items-center justify-center bg-neutral-900/20 hover:bg-violet-900/5 rounded-xl border border-neutral-800/80 hover:border-violet-800/80 group ease-in-out duration-300">
                        <RiNextjsLine className="text-5xl text-neutral-400 group-hover:text-neutral-700 ease-in-out duration-300" />
                    </Link>
                    <Link to={"/"} className="w-20 h-24 flex items-center justify-center bg-neutral-900/20 hover:bg-violet-900/5 rounded-xl border border-neutral-800/80 hover:border-violet-800/80 group ease-in-out duration-300">
                        <FaWordpressSimple className="text-5xl text-neutral-400 group-hover:text-blue-700 ease-in-out duration-300" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero