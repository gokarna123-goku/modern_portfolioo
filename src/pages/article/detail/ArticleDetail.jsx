import React from 'react'
import Layout from '../../../components/layout/Layout'
import { TiCalendarOutline } from 'react-icons/ti'
import { TbClockHour4 } from 'react-icons/tb'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ArticleDetail = () => {
    return (
        <Layout className={"md:py-[2ch] py-6 w-full h-auto space-y-12"}>
            <div className="w-full flex items-start gap-10 justify-between flex-wrap md:pt-14 pt-6 relative">
                <div className="w-full space-y-8">
                    <div className="space-y-4">
                        <h1 className="md:text-5xl text-3xl text-neutral-300 font-bold !leading-[1.3]">
                            How to setup the react project with Tailwind CSS?
                        </h1>
                        <div className="w-full flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2 text-sm text-neutral-500/80">
                                <TiCalendarOutline className='text-base text-neutral-600' />
                                <p className="font-normal">
                                    06 August, 2024
                                </p>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-neutral-400/60"></div>
                            <div className="flex items-center gap-x-2 text-sm text-neutral-500/80">
                                <TbClockHour4 className='text-base text-neutral-600' />
                                <p className="font-normal">
                                    5 min read
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="text-base text-neutral-500 font-normal">
                        Combining React.js with Tailwind CSS allows you to build modern, responsive, and highly customizable web applications efficiently. Tailwind CSS is a utility-first CSS framework that provides a vast array of classes to style your components directly within your JSX. This guide will walk you through the steps to set up a React.js project with Tailwind CSS.
                    </p>
                    <img src="https://cdn.pixabay.com/photo/2024/04/17/20/14/man-8702916_1280.jpg" alt="" className="w-full aspect-[4/2] object-cover object-center rounded-lg" />
                    <p className="text-base text-neutral-500 font-normal">
                        I recently added a few animations to my personal site to improve its aesthetics and the result I think was excellent. You can refresh this page to see the animation in action. The animations were added using the React Framer motion library.
                    </p>
                    <div className="space-y-4">
                        <h1 className="text-3xl text-neutral-400 font-bold">
                            Install guidelines
                        </h1>
                        <p className="text-base text-neutral-500 font-normal">
                            Firstly need to install the React Framer Motion library.
                        </p>
                        <p className="text-base text-neutral-500 font-normal">
                            The main theme of "Steal Like an Artist" by Austin Kleon centers on the idea that creativity is not about producing something entirely original, but about finding inspiration in the work of others. Kleon argues that all artists, whether they realize it or not, borrow ideas from those who came before them. Creativity involves a process of collecting ideas, remixing them, and transforming them into something unique. By "stealing" like an artist, one can learn from various sources, embrace influences, and develop a distinctive creative voice. Kleon’s book encourages readers to view creativity as a collaborative and cumulative process, rather than a solitary act of invention.
                        </p>
                        <p className="text-base text-neutral-500 font-normal">
                            The main theme of "Show Your Work!" by Austin Kleon is the importance of sharing your creative process and work with others. Kleon emphasizes that creativity is a collaborative journey and that by openly sharing your progress, successes, and even failures, you can build a supportive community, gain valuable feedback, and inspire others. The book encourages artists and creators to be open, transparent, and generous with their knowledge and experiences, fostering a culture of mutual growth and continuous learning.
                        </p>
                        {/* <img src="https://cdn.pixabay.com/photo/2024/06/14/12/15/developer-8829735_1280.jpg" alt="" className="w-full aspect-[5/2] object-cover object-center rounded-lg" /> */}
                        <img src="https://cdn.pixabay.com/photo/2022/08/27/00/16/interior-design-7413418_1280.jpg" alt="" className="w-full aspect-[5/2] object-cover object-center rounded-lg" />
                        <p className="text-base text-neutral-500 font-normal">
                            The main theme of "Steal Like an Artist" by Austin Kleon centers on the idea that creativity is not about producing something entirely original, but about finding inspiration in the work of others. Kleon argues that all artists, whether they realize it or not, borrow ideas from those who came before them. Creativity involves a process of collecting ideas, remixing them, and transforming them into something unique. By "stealing" like an artist, one can learn from various sources, embrace influences, and develop a distinctive creative voice. Kleon’s book encourages readers to view creativity as a collaborative and cumulative process, rather than a solitary act of invention.
                        </p>
                        <p className="text-base text-neutral-500 font-normal">
                            The main theme of "Show Your Work!" by Austin Kleon is the importance of sharing your creative process and work with others. Kleon emphasizes that creativity is a collaborative journey and that by openly sharing your progress, successes, and even failures, you can build a supportive community, gain valuable feedback, and inspire others. The book encourages artists and creators to be open, transparent, and generous with their knowledge and experiences, fostering a culture of mutual growth and continuous learning.
                        </p>
                        <p className="text-base text-neutral-500 font-normal">
                            Hope you loved this article detail design and enjoyed reading it. Thank you 🙏😌
                        </p>
                    </div>
                </div>

                {/* <div className="md:w-[25%] w-full space-y-8 pt-10 sticky top-0">
                    <div className="space-y-4">
                        <h5 className="text-lg text-neutral-600 font-medium">Article By</h5>
                        <div className="w-full flex items-center gap-x-4">
                            <img src="https://cdn.pixabay.com/photo/2024/01/04/13/12/ai-generated-8487422_1280.png" alt="" className="w-16 h-16 rounded-full border border-neutral-200 object-cover object-center" />
                            <div className="flex-1">
                                <p className="text-lg text-neutral-700 font-semibold">
                                    Austin Kleon
                                </p>
                                <p className="text-base text-yellow-700 font-normal">
                                    @author
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-t border-neutral-200"></div>
                    <div className="space-y-4">
                        <h5 className="text-lg text-neutral-600 font-medium">Share Article</h5>
                        <div className="w-full flex items-center gap-x-3">
                            <Link to={"/"} className="w-12 aspect-square flex items-center justify-center text-xl bg-neutral-200/40 border border-neutral-300/70 rounded-lg">
                                <FaInstagram className='w-6 h-6 text-yellow-800' />
                            </Link>
                            <Link to={"/"} className="w-12 aspect-square flex items-center justify-center text-xl bg-neutral-200/40 border border-neutral-300/70 rounded-lg">
                                <FaFacebookF className='w-6 h-6 text-yellow-800' />
                            </Link>
                            <Link to={"/"} className="w-12 aspect-square flex items-center justify-center text-xl bg-neutral-200/40 border border-neutral-300/70 rounded-lg">
                                <FaYoutube className='w-6 h-6 text-yellow-800' />
                            </Link>
                            <Link to={"/"} className="w-12 aspect-square flex items-center justify-center text-xl bg-neutral-200/40 border border-neutral-300/70 rounded-lg">
                                <FaXTwitter className='w-6 h-6 text-yellow-800' />
                            </Link>
                        </div>
                    </div>
                </div> */}
            </div>
        </Layout>
    )
}

export default ArticleDetail