import { Link } from 'react-router-dom'

export default function TestSection() {
    return (
        <div className='w-full flex relative items-center flex-col'>
            <div className='w-full relative test-section'>
                <img
                    src='//a.storyblok.com/f/71234/327x202/631a6a1186/section3-top-badge.svg'
                    alt='topBadge'
                    className='absolute top-0 left-1/2 -translate-x-1/2'
                />
                <img
                    src='//a.storyblok.com/f/71234/254x508/156094b038/s3-desktop-left.svg'
                    alt='leftBadge'
                    className='absolute top-1/2 left-0 -translate-y-[45%]'
                />
                <img
                    src='//a.storyblok.com/f/71234/254x508/6219a4e55b/s3-desktop-right.svg'
                    alt='rightBadge'
                    className='absolute top-1/2 right-0 -translate-y-[45%]'
                />
                <div className='w-full relative md:mx-auto md:flex md:max-w-[960px] lg:max-w-[1200px]'>
                    <img
                        src='//a.storyblok.com/f/71234/375x251/38f670e1a3/qec-m-top-badge.svg'
                        alt='mobileTopBadge'
                        className='w-full md:hidden absolute top-0 left-1/2 -translate-x-1/2'
                    />
                    <img
                        src='//a.storyblok.com/f/71234/375x478/83e04b90cd/qec-m-bottom-badge.svg'
                        alt='mobileMidBadge'
                        className='w-full md:hidden absolute top-1/2 left-0 -translate-y-[40%]'
                    />
                    <div className='w-full flex relative pt-14 px-6 pb-8 flex-col'>
                        <div className='text-white z-10 max-w-[515px] self-center text-center pb-10 md:px-0 md:pb-[72px]'>
                            <h1 className='md:text-5xl font-bold text-3xl'>Our short English quiz</h1>
                        </div>
                        <div className='m-0 flex flex-col justify-center md:flex-row'>
                            <div className='section-three__card md:max-w-[960px] md:flex-row'>
                                <div className='flex items-center pb-6 text-secondary'>
                                    <h6 className='text-[64px] lg:text-[88px] mr-3 leading-tight'>15</h6>
                                    <div>
                                        <p className='text-base font-normal'>
                                            <span>MIN</span>
                                        </p>
                                        <h3 className='text-3xl font-bold'>
                                            <span>
                                                <b>QUICK CHECK</b>
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                                <hr className='ct-line' />
                                <div className='flex md:h-full md:pl-6'>
                                    <div className='hidden md:mr-6 md:flex'>
                                        <hr className='ct-line w-px h-full' />
                                    </div>
                                    <div className='w-full flex flex-col justify-between'>
                                        <p className='text-base font-normal pt-[32px] pb-[18px] lg:max-w-[401px]'>
                                            This English quiz estimates your level in just 15 minutes, including reading
                                            skills (English grammar and vocabulary) and listening skills.
                                        </p>
                                        <ul className='text-base list-disc ml-3'>
                                            <li className='text-base'>
                                                <p className='text-base font-normal'>
                                                    <span>No fees. No sign ups. Start now </span>
                                                </p>
                                            </li>
                                            <li className='text-base'>
                                                <p className='text-base font-normal'>
                                                    <span>Quiz results aligned to CEFR levels </span>
                                                </p>
                                            </li>
                                            <li className='text-base'>
                                                <p className='text-base font-normal'>
                                                    <span>Share your score on social media </span>
                                                </p>
                                            </li>
                                        </ul>
                                        <div className='flex mt-8 items-center flex-col lg:flex-row'>
                                            <a className='btn-start15' href='/quick-check/take-test/'>
                                                <span className='ct-section5__title items-center'>
                                                    Start 15 min test
                                                </span>
                                                <span className='touch-ripple-root' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
