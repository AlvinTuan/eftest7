import Button from '~/components/Button'

export default function SectionOne() {
    return (
        <div className='section-one'>
            <div className='lg:max-w-[1200px] lg:pt-16 mx-auto pt-[52px] pl-12 pr-12 pb-6'>
                <div className='flex flex-col text-white lg:items-center lg:flex lg:item lg:flex-row'>
                    <div>
                        <h1 className='pb-6 leading-desktopTitle1 h1-title'>
                            The first free standardized English test online
                        </h1>
                        <p className='pb-8'>
                            Take the EF Standard English Test and get an accurate assessment of your English level from
                            home
                        </p>
                        <Button
                            toLink='/quick-check'
                            classBgTextColor='bg-white text-primary'
                            label='Test your English now'
                        ></Button>
                    </div>
                    <img src='/desktop-badge.svg' alt='' className='w-[405px] h-[420px] mt-5 mx-auto' />
                </div>
            </div>
        </div>
    )
}
