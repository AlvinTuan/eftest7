export default function SectionThree() {
    return (
        <div className='section-three'>
            <img
                src='//a.storyblok.com/f/71234/254x508/6219a4e55b/s3-desktop-right.svg'
                alt='rightBadge'
                className='absolute top-1/2 right-0 -translate-y-[45%]'
            />
            <img
                src='//a.storyblok.com/f/71234/254x508/156094b038/s3-desktop-left.svg'
                alt='leftBadge'
                className='absolute top-1/2 left-0 -translate-y-[45%]'
            />
            <div className='relative w-full md:max-w-[960px] md:flex md:mx-auto lg:max-w-[1200px]'>
                <img
                    src='//a.storyblok.com/f/71234/327x202/631a6a1186/section3-top-badge.svg'
                    alt='mobileTopBadge'
                    className='w-full md:hidden top-0 left-1/2 absolute -translate-x-1/2'
                />
                <img
                    src='//a.storyblok.com/f/71234/375x388/521bfb4fbb/section3-middle-badge.svg'
                    alt='mobileMidBadge'
                    className='w-full md:hidden top-1/2 left-0 absolute -translate-y-[40%]'
                />
                <img
                    src='//a.storyblok.com/f/71234/322x161/6ce41febbe/section3-bottom-badge.svg'
                    className='w-full md:hidden left-1/2 bottom-0 absolute -translate-x-1/2'
                    alt='mobileBottomBadge'
                />
                <img
                    src='//a.storyblok.com/f/71234/672x254/7f5a4e1b2d/s3-desktop-top.svg'
                    alt='topBadge'
                    className='absolute top-0 left-1/2 -translate-x-1/2'
                />
                <img
                    src='//a.storyblok.com/f/71234/675x255/cc815cb0b3/s3-desktop-bottom.svg'
                    alt='topBadge'
                    className='absolute bottom-0 left-1/2 -translate-x-1/2'
                />
                <div className='relative flex flex-col w-full pb-8 pl-6 pr-6 pt-14 md:pb-24 md:pt-24'>
                    <div className='z-10 pb-10 pl-12 pr-10 text-center text-white md:pl-0 md:pr-0 md:pb-[72px]'>
                        <h2 className='text-[32px] leading-9 font-bold'>Test your English now</h2>
                    </div>
                    <div className='flex flex-col justify-center m-0 min-[600px]:mx-auto md:flex-row'>
                        <div className='section-three__card '>
                            <div className='flex items-center pb-6 text-[#45dd97]'>
                                <h6 className='mr-3 text-5xl font-bold lg:text-[88px]'>15</h6>
                                <div>
                                    <p className='max-w-[760px] text-base font-normal'>
                                        <span>
                                            <b>MIN</b>
                                        </span>
                                    </p>
                                    <h3 className='text-3xl font-bold'>
                                        <span>
                                            <b>QUICK CHECK</b>
                                        </span>
                                    </h3>
                                </div>
                            </div>
                            <hr className='ct-line' />
                            <div className='flex md:h-full md:pl-0'>
                                <div className='flex flex-col justify-between h-full'>
                                    <h5 className='pb-4 -mr-2 text-xl font-bold pt-9'>Check your English level</h5>
                                    <ul className='ml-4 text-base list-disc'>
                                        <li className='text-sm md:text-base'>
                                            <p className='ct-p'>
                                                <span>No fees. No sign up. Start now </span>
                                            </p>
                                        </li>
                                        <li className='text-sm md:text-base'>
                                            <a className='hover:text-focus_hover'>
                                                <p className='ct-p'>
                                                    <span>Beginner, intermediate, and advanced</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li className='text-sm md:text-base'>
                                            <p className='ct-p'>
                                                <span>Share your score on social media </span>
                                            </p>
                                        </li>
                                    </ul>
                                    <div className='flex mt-8 items-center flex-col lg:flex-row'>
                                        <a className='ct-btnSection ct-btnColorOdd' target='_self'>
                                            <span className='MuiButton-label'>Take the quiz</span>
                                            <span className='MuiTouchRipple-root' />
                                        </a>
                                        {/* <a className="jss452" href="/quick-check/">
                                    <span className="MuiTypography-root jss453 MuiTypography-body1">Quiz details
                                        <img src="//a.storyblok.com/f/79503/x/faebe83576/arrow-right-black-16.svg" alt="arrowForward" />
                                    </span>
                                </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='section-three__card md:ml-6'>
                            <div className='flex items-center pb-6 text-[#10B7DD]'>
                                <h6 className='mr-3 text-5xl font-bold lg:text-[88px]'>50</h6>
                                <div>
                                    <p className='max-w-[760px] text-base font-normal'>
                                        <span>
                                            <b>MIN</b>
                                        </span>
                                    </p>
                                    <h3 className='text-3xl font-bold'>
                                        <span>
                                            <b>EF SET</b>
                                        </span>
                                    </h3>
                                </div>
                            </div>
                            <hr className='ct-line' />
                            <div className='flex md:h-full md:pl-0'>
                                <div className='flex flex-col justify-between h-full'>
                                    <h5 className='pb-4 -mr-2 text-xl font-bold pt-9'>
                                        Certify your English proficiency
                                    </h5>
                                    <ul className='ml-4 text-base list-disc'>
                                        <li className='text-sm md:text-base'>
                                            <p className='ct-p'>
                                                <span>Get a personalized EF SET Certificate </span>
                                            </p>
                                        </li>
                                        <li className='text-sm md:text-base'>
                                            <a className='hover:text-focus_hover'>
                                                <p className='ct-p'>
                                                    <span>Results fully aligned with CEFR levels</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li className='text-sm md:text-base'>
                                            <p className='ct-p'>
                                                <span>Free </span>
                                            </p>
                                        </li>
                                    </ul>
                                    <div className='flex mt-8 items-center flex-col lg:flex-row'>
                                        <a className='ct-btnSection ct-btnColorEven' target='_self'>
                                            <span>Take the test</span>
                                        </a>
                                        {/* <a className="jss452" href="/quick-check/">
                                    <span className="MuiTypography-root jss453 MuiTypography-body1">Quiz details
                                        <img src="//a.storyblok.com/f/79503/x/faebe83576/arrow-right-black-16.svg" alt="arrowForward" />
                                    </span>
                                </a> */}
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
