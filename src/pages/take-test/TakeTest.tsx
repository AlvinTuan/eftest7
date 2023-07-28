import { Link } from 'react-router-dom'
import Header from '~/layout/header'

export default function TakeTest() {
    return (
        <div className='w-full'>
            <header className='header fixed top-0 '>
                <div className='relative min-h-[48px] sm:min-h-[81px] w-full h-full mx-auto flex items-center pl-6 pr-3 flex-row justify-end md:max-w-[960px] md:justify-between lg:py-0 lg:px-[120px] lg:max-w-[1200px]'>
                    <a>
                        <picture>
                            <img src='/efset-logo_black.svg' alt='logo' />
                        </picture>
                    </a>
                </div>
            </header>
            <main className='min-h-screen bg-takeTest flex items-center justify-center'>
                <div className='bg-[#F4F8FC] p-4 w-full min-w-[300px] max-w-[600px] rounded lg:p-12 overflow-hidden'>
                    <div className='w-full visible flex justify-center'>
                        <h1 className='text-xl text-center font-semibold'>
                            Welcome, you are about to start the 15-minute Quick English Check
                        </h1>
                    </div>
                    <div className='mx-4 my-12 flex items-center justify-between'>
                        <div className='flex flex-col items-center'>
                            <img src='/reading.svg' alt='' className='w-14 h-14 md:w-16 md:h-16' />
                            <div className='mt-2 text-center'>
                                <p className='text-base md:text-xl'>Reading</p>
                                <p className='font-semibold'>7.5 mins</p>
                            </div>
                        </div>
                        <img src='/plus.svg' alt='' className='w-3 h-3 md:w-6 md:h-6' />
                        <div className='flex flex-col items-center'>
                            <img src='/listening.svg' alt='' className='w-14 h-14 md:w-16 md:h-16' />
                            <div className='mt-2 text-center'>
                                <p className='text-base md:text-xl'>Listening</p>
                                <p className='font-semibold'>7.5 mins</p>
                            </div>
                        </div>
                        <img src='/equal.svg' alt='' className='w-3 h-3 md:w-6 md:h-6' />
                        <div className='flex flex-col items-center'>
                            <div className='relative'>
                                <img src='/clock.svg' alt='' className='w-14 h-14 md:w-16 md:h-16' />
                                <p className='absolute text-takeTestColor text-lg font-semibold top-4 left-1/2 -translate-x-1/2'>
                                    15
                                </p>
                            </div>
                            <div className='mt-2 text-center'>
                                <p className='text-base md:text-xl'>Total times</p>
                                <p className='font-semibold'>15 mins</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-6 ml-4'>
                        <ul className='list-disc'>
                            <li className='py-2 md:py-3 md:text-lg'>
                                This test has two sections: reading and listening
                            </li>
                            <li className='py-2 md:py-3 md:text-lg'>
                                You will start with a 7.5-minute reading section.
                            </li>
                            <li className='py-2 md:py-3 md:text-lg'>Pace yourself to avoid running out of time.</li>
                            <li className='py-2 md:py-3 md:text-lg'>You will not lose points for wrong answers.</li>
                            <li className='py-2 md:py-3 md:text-lg'>Once you click "Next" you cannot go back.</li>
                        </ul>
                    </div>
                    <div className='flex justify-end'>
                        <button className='btn__start-TakeTest' type='button'>
                            <Link to='/quick-check/take-test/survey1' className='self-center'>
                                <span style={{ visibility: 'visible', maxWidth: '100%' }}>Start the test</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
