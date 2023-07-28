import Button from "~/components/Button";

export default function SectionFive() {
    return (
        <div className='section-five'>
            <div className='ct-section-body'>
                <div className='w-full flex relative pt-[72px] px-6 flex-col pb-9 lg:items-center lg:pl-[84px] lg:flex-row xl:pl-[120px]'>
                    <div className='text-white flex items-center flex-col lg:items-start lg:text-center'>
                        <h2 className='text-2xl font-bold pb-8 lg:text-[32px] lg:text-center lg:pr-9'>
                            EF SET Certificate
                        </h2>
                        <p className='text-base font-normal text-center pb-[60px] lg:w-[420px] lg:text-lg lg:self-auto lg:text-left lg:pb-6'>
                            Receive a free personalized online English certificate when you take the 50-minute English
                            test. You can easily add it to your CV or LinkedIn profile.
                        </p>
                        <Button classBgTextColor="border-solid border-px border-[#ffffff66]" label="Certify your English level"></Button>
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
    )
}
