import { Link } from 'react-router-dom'
import { TiCalendar } from 'react-icons/ti'
import { TbClockHour3 } from "react-icons/tb";

const ArticleCard = ({ img, title, desc, date, time }) => {
    return (
        <Link to={"/article-detail"} className="w-full border border-neutral-800/20 hover:border-neutral-800/60 bg-neutral-900/15 hover:bg-neutral-800/30 md:p-3 p-4 rounded-xl flex items-center flex-wrap gap-x-6 gap-y-4 ease-in-out duration-300 cursor-pointer">
            <div className="md:w-72 w-full h-[25vh] rounded-lg overflow-hidden">
                <img src={img} alt="img" className="w-full h-full object-cover object-center" />
            </div>
            <div className="space-y-5 flex-1 md:px-0 px-2">
                <div className="space-y-2">
                    <h1 className="text-lg text-neutral-200 font-medium line-clamp-2">
                        {title}
                    </h1>
                    <p className="text-[0.95rem] text-neutral-500 font-normal pr-8 line-clamp-3">
                        {desc}
                    </p>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="flex items-center gap-x-1.5">
                        <TiCalendar className="w-4 h-4 text-neutral-500" />
                        <p className="text-sm text-neutral-400 font-normal">{date}</p>
                    </div>
                    <div className="w-1 h-1 bg-neutral-600/70 rounded-full"></div>
                    <div className="flex items-center gap-x-1.5">
                        <TbClockHour3 className="w-4 h-4 text-neutral-500" />
                        <p className="text-sm text-neutral-400 font-normal">{time}</p>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default ArticleCard