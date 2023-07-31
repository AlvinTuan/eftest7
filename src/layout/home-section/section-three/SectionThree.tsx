import CardTest from '~/components/CardTest/CardTest'
import { criteriaOfEFset, criteriaOfQuickCheck } from '~/components/CardTest/Criteria'

export default function SectionThree() {
    return (
        <div className='section-three bgColorGreen'>
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
                    <div className='flex flex-col justify-center m-0 min-[600px]:mx-auto md:flex-row md:gap-x-6'>
                        <CardTest
                            minitues={15}
                            typeTest='Quick Check'
                            title='Check your English level'
                            criteriaList={criteriaOfQuickCheck}
                            labelBtn='Take the quiz'
                            textColor='text-secondary'
                            btnColor='ct-btnColorOdd'
                        ></CardTest>
                        <CardTest
                            minitues={50}
                            typeTest='EF SET'
                            title='Certify your English proficiency'
                            criteriaList={criteriaOfEFset}
                            labelBtn='Take the test'
                            textColor='text-tertiary'
                            btnColor='ct-btnColorEven'
                        ></CardTest>
                    </div>
                </div>
            </div>
        </div>
    )
}
