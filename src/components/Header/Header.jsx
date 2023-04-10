import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className='relative container  mx-auto flex justify-between mt-10 '>

            <Link to='/'>
                <h1 className='text-2xl lg:text-4xl lg:font-bold tracking-wide ' >CareerBoost</h1>
            </Link>

            <div>
                {/* Nav Items Section for lerge device start*/}
                <ul className='text-xl font-medium  items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/statistics'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Statistics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/appliedJobs'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Applied Jobs 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
                {/* Nav Items Section for lerge device End*/}

                {/* Mobile Navbar Section */}
                <div className='lg:hidden'>
                    {/* Dropdown Open Button */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                CareerBoost
                                            </span>
                                        </Link>
                                    </div>
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/' className='default'>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/statistics'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Statistics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/appliedJobs'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Applied Jobs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/blog'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                               Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                <button className="btn common_btn text-2xl uppercase font-bold  text-white border-0">Star Applying</button>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Link to='/' className='hidden lg:flex '>
                <button className="btn common_btn text-2xl uppercase font-bold  text-white border-0">Star Applying</button>
            </Link>

        </nav>
    );
};

export default Header;