import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='w-full border-t border-neutral-900/40'>
            <Layout className={"py-10 w-full flex items-center justify-center"}>
                <p className="text-neutral-700 text-sm font-normal inline-flex gap-x-1">
                    &copy; {new Date().getFullYear()} <Link to={"https://www.youtube.com/@g-techofficial"} target={"_blank"} className='text-violet-700/60 hover:text-violet-700/80 ease-in-out duration-200'>G-Tech</Link>. All rights reserved.
                </p>
            </Layout>
        </footer>

    )
}

export default Footer