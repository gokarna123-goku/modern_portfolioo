import React from 'react'

const Layout = ({ children, className }) => {
    return (
        <div className={`w-full h-auto flex flex-col lg:px-80 md:px-16 sm:px-7 px-4 ${className}`}>
            {children}
        </div>
    )
}

export default Layout