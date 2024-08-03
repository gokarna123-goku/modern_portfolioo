import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className='w-full md:h-[calc(100vh-20ch)] md:py-0 py-6 h-auto flex items-center justify-between gap-14 flex-wrap'>
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
    )
}

export default Hero