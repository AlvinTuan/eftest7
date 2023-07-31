import { useState } from 'react'
import AboutUs from '~/layout/Menu/about-us'
import Cefr from '~/layout/Menu/cefr'
import OurTests from '~/layout/Menu/ourtests'
import Certification from '../Menu/certification'
import { Link } from 'react-router-dom'

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <header className='relative z-10 w-full shadow-md'>
                <div className='bg-white relative min-h-[56px] md:min-h-[64px] w-full h-full mx-auto flex items-center pl-6 pr-3 flex-row justify-end md:max-w-[960px] md:justify-between lg:py-0 lg:px-[120px] lg:max-w-[1200px]'>
                    <Link to={'/'} className='mr-auto'>
                        <picture>
                            <img src='/efset-logo_black.svg' alt='logo' />
                        </picture>
                    </Link>
                    <ul
                        className={`m-0 p-0 bg-white md:bg-inherit absolute left-0 z-[-1] md:z-auto md:static list-none w-full flex items-center flex-col md:flex-row md:justify-between md:py-4 md:pl-[60px] transition-all duration-500 ease-in ${
                            showMenu ? 'top-16' : 'top-[-225px]'
                        } `}
                    >
                        <div className='menu-item'>
                            <div>
                                <li className='w-full flex relative text-left items-center justify-start no-underline px-4 py-4 md:mr-6 md:pb-3 lg:mr-9 xl:mr-[60px]'>
                                    <OurTests></OurTests>
                                </li>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <li className='w-full flex relative text-left items-center justify-start no-underline px-4 py-4 md:mr-6 md:pb-3 lg:mr-9 xl:mr-[60px]'>
                                    <Certification></Certification>
                                </li>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <li className='w-full flex relative text-left items-center justify-start no-underline px-4 py-4 md:mr-6 md:pb-3 lg:mr-9 xl:mr-[60px]'>
                                    <Cefr></Cefr>
                                </li>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <li className='w-full flex relative text-left items-center justify-start no-underline px-4 py-4 md:mr-6 md:pb-3 lg:mr-9 xl:mr-[60px]'>
                                    <AboutUs></AboutUs>
                                </li>
                            </div>
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
                </div>
            </header>
        </>
    )
}
