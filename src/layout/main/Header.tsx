import { useState } from 'react'
import OurTests from '~/components/header/OurTests'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <header className='w-full'>
            <div className='header h-14 pr-3 pl-6 md:h-20 md:py-4 md:px-[120px] mx-auto max-w-[1200px]'>
                <nav className='flex items-center justify-end h-full md:justify-between md:gap-x-14'>
                    <a className='mr-auto h-6 logo w-[103px]'>
                        <img src='/efset-logo_black.svg' alt='' />
                    </a>
                    <ul className='hidden md:flex gap-x-16'>
                        <div className='menu-item'>
                            <li>
                                <OurTests></OurTests>
                            </li>
                        </div>
                        <div className='menu-item'>
                            <li>
                                <OurTests></OurTests>
                            </li>
                        </div>
                        <div className='menu-item'>
                            <li>
                                <OurTests></OurTests>
                            </li>
                        </div>
                        <div className='menu-item'>
                            <li>
                                <OurTests></OurTests>
                            </li>
                        </div>
                    </ul>
                    <button
                        className='flex items-center justify-center w-10 h-10 btn-bar md:hidden'
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        {showMenu ? (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='ct-icon'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        ) : (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='ct-icon'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 9h16.5m-16.5 6.75h16.5' />
                            </svg>
                        )}
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header
