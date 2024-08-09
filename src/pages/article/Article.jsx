import React from 'react'
import Layout from '../../components/layout/Layout'
import ArticleCard from '../../components/article/ArticleCard'

const Article = () => {
    return (
        <Layout className='md:py-[6ch] py-6 w-full h-auto space-y-12'>
            <div className='space-y-2'>
                <h1 className="text-3xl text-neutral-200 font-bold">
                    Articles
                </h1>
                <p className="text-base text-neutral-500 font-normal">
                    You will get tutorial about the my research, projects, and more.
                </p>
            </div>

            {/* articles */}
            <div className="grid grid-cols-1 gap-6">
                <ArticleCard img={"https://cdn.pixabay.com/photo/2015/10/02/15/00/diary-968592_1280.jpg"} title={"How to setup the react project with Tailwind css?"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam."} date={"August 08, 2024"} time={"5 min read"} />
                <ArticleCard img={"https://cdn.pixabay.com/photo/2015/10/02/15/00/diary-968592_1280.jpg"} title={"How to setup the react project with Tailwind css?"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam."} date={"August 08, 2024"} time={"5 min read"} />
                <ArticleCard img={"https://cdn.pixabay.com/photo/2015/10/02/15/00/diary-968592_1280.jpg"} title={"How to setup the react project with Tailwind css?"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam."} date={"August 08, 2024"} time={"5 min read"} />
                <ArticleCard img={"https://cdn.pixabay.com/photo/2015/10/02/15/00/diary-968592_1280.jpg"} title={"How to setup the react project with Tailwind css?"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam."} date={"August 08, 2024"} time={"5 min read"} />
            </div>

        </Layout>
    )
}

export default Article