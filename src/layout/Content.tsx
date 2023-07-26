const Content = () => {
    return (
        <main className='w-full'>
            <div className='w-full section-one'>
                <div className='lg:max-w-[1200px] lg:pt-16 mx-auto pt-[52px] pl-12 pr-12 pb-6'>
                    <div className='flex flex-col text-white lg:items-center lg:flex lg:item lg:flex-row'>
                        <div>
                            <h1 className='pb-6 leading-desktopTitle1 h1-title'>
                                The first free standardized English test online
                            </h1>
                            <p className='pb-8'>
                                Take the EF Standard English Test and get an accurate assessment of your English level
                                from home
                            </p>
                            <a
                                href=''
                                className='flex items-center justify-center h-[56px] pt-3 pb-3 pl-6 pr-6 bg-white rounded-full lg:w-[205px] lg:h-12 shadow-btn transition-all'
                            >
                                <span className='font-medium text-primary'>Test your English now</span>
                            </a>
                        </div>
                        <img src='/desktop-badge.svg' alt='' className='w-[405px] h-[420px]' />
                    </div>
                </div>
            </div>
            <div className='section-two '>
                <div className='lg:max-w-[1200px] md:max-w-[960px] md:mx-auto'>
                    <div className='lg:max-w-[820px] lg:mx-auto pt-[240px] pl-12 pr-12 flex'>
                        <div className='w-full mb-[108px] md:max-w-[250px] md:self-center'>
                            <h2 className='h2-title'>
                                <span>
                                    <b>Why </b>
                                </span>
                            </h2>
                            <h2 className='h2-title'>
                                <span>
                                    <b>EF SET?</b>
                                </span>
                            </h2>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='section-two-item'>
                                <div className='max-w-[230px] lg:max-w-[304px]'>
                                    <div className='mb-4'>
                                        <img
                                            src='//a.storyblok.com/f/71234/32x33/2dd9a91916/shield-icon.svg'
                                            alt='infoIcon'
                                        />
                                    </div>
                                    <h4 className='mb-2 h4-title'>It's Reliable.</h4>
                                    <p>
                                        <span>
                                            <b>Created by experts. </b>
                                        </span>
                                        <span>
                                            This online English proficiency test was developed over 5 years with leading
                                            scientists in the field of English assessment.
                                        </span>
                                        <span>
                                            <a href='/about/' target='_self' className='font-semibold underline'>
                                                Learn more.
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className='justify-end section-two-item'>
                                <div className='max-w-[230px] lg:max-w-[304px]'>
                                    <div className='mb-4'>
                                        <img
                                            src='//a.storyblok.com/f/71234/47x32/9890bc01b2/phone-icon.svg'
                                            alt='infoIcon'
                                        />
                                    </div>
                                    <h4 className='mb-2 h4-title'>It's Accessible.</h4>
                                    <p>
                                        <span>
                                            <b>An English level test for everyone. </b>
                                        </span>
                                        <span>
                                            EF SET is available on any desktop, tablet, or mobile device. All you need
                                            is an internet connection and less than an hour of your time.
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className='section-two-item'>
                                <div className='max-w-[230px] lg:max-w-[304px]'>
                                    <div className='mb-4'>
                                        <img
                                            src='//a.storyblok.com/f/71234/30x30/e23916f3d1/gift-icon.svg'
                                            alt='infoIcon'
                                        />
                                    </div>
                                    <h4 className='mb-2 h4-title'>It's Free.</h4>
                                    <p>
                                        <span>
                                            <b>Why pay for accurate results? </b>
                                        </span>
                                        <span>
                                            There shouldn't be any barriers to testing your English. English tests are
                                            an important tool for building English proficiency.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative w-full section-three'>
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
                    {/* <img
                        src='//a.storyblok.com/f/71234/327x202/631a6a1186/section3-top-badge.svg'
                        alt='mobileTopBadge'
                        className='jss71 jss72'
                    />
                    <img
                        src='//a.storyblok.com/f/71234/375x388/521bfb4fbb/section3-middle-badge.svg'
                        alt='mobileMidBadge'
                        className='jss71 jss73'
                    />
                    <img
                        src='//a.storyblok.com/f/71234/322x161/6ce41febbe/section3-bottom-badge.svg'
                        className='jss71 jss74'
                        alt='mobileBottomBadge'
                    /> */}
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

            <div className='section-four w-full'>
                <div className='w-full relative md:mx-auto md:flex md:max-w-[960px] lg:max-w-[1200px]'>
                    <img
                        src='//a.storyblok.com/f/71234/1200x255/14eab92940/s4-top-badge.svg'
                        className='hidden md:top-0 md:w-full md:flex md:absolute'
                    />
                    <div className='w-full flex relative py-[72px] px-6 flex-col lg:items-end lg:py-[156px] lg:px-[84px] lg:flex-row xl:px-[120px]'>
                        <img
                            src='//a.storyblok.com/f/71234/91x91/2aade672ab/s4-mobile-image.svg'
                            className='pb-8 lg:hidden'
                            alt='mobileImage'
                            loading='lazy'
                        />
                        <div className='flex w-full flex-col items-center md:items-start'>
                            <h2 className='text-2xl font-bold leading-10 text-center pb-6 lg:text-3xl lg:max-w-[468px] lg:text-left lg:pr-9'>
                                A scalable English testing solution for any organization
                            </h2>
                            <p className='text-[#333333] max-w-[300px] md:max-w-[500px] lg:text-lg lg:max-w-[468px] self-center lg:self-auto text-center lg:text-left pb-8'>
                                We have helped over 3,000 schools and organizations around the world define proficiency
                                benchmarks using our English level test.
                            </p>
                            <a className='ct-btnSection ct-btnColorOdd w-[278px]'>
                                <span className='MuiButton-label'>English assessment solutions</span>
                                <span className='MuiTouchRipple-root' />
                            </a>
                        </div>
                        <div className='hidden lg:flex lg:w-full lg:h-full'>
                            <img
                                src='//a.storyblok.com/f/71234/391x318/af480f62c1/s4-desktop-image.svg'
                                alt='desktopImage'
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-five w-full relative ct-section5Background'>
                <div className='w-full relative md:mx-auto md:flex md:max-w-[960px] lg:max-w-[1200px] '>
                    <div className='w-full flex relative pt-[72px] px-6 flex-col pb-9 lg:items-center lg:pl-[84px] lg:flex-row xl:pl-[120px]'>
                        <div className='text-white flex items-center flex-col lg:items-start lg:text-center'>
                            <h2 className='text-2xl font-bold pb-8 lg:text-[32px] lg:text-center lg:pr-9'>
                                EF SET Certificate
                            </h2>
                            <p className='text-base font-normal text-center pb-[60px] lg:w-[420px] lg:text-lg lg:self-auto lg:text-left lg:pb-6'>
                                Receive a free personalized online English certificate when you take the 50-minute
                                English test. You can easily add it to your CV or LinkedIn profile.
                            </p>
                            <a className='ct-btnSection ct-sec5Btn' href='/english-certificate/'>
                                <span className='ct-section5__title'>Certify your English level</span>
                                <span className='touch-ripple-root' />
                            </a>
                        </div>
                        <div className='w-full h-full flex relative'>
                            <img
                                src='//a.storyblok.com/f/79503/468x467/2531d03856/certificate-image-desktop.svg'
                                className='h-full hidden lg:w-full lg:flex lg:opacity-50'
                                alt='desktopImage'
                            />
                            <img
                                src='//a.storyblok.com/f/79503/468x467/2531d03856/certificate-image-desktop.svg'
                                className='h-full w-full mx-auto md:w-1/2 md:hidden'
                                alt='mobileImage'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Content
