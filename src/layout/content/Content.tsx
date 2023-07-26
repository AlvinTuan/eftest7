import SectionOne from '../home-section/section-one'
import SectionTwo from '../home-section/section-two'
import SectionThree from '../home-section/section-three'
import SectionFour from '../home-section/section-four'
import SectionFive from '../home-section/section-five/SectionFive'
import SectionSix from '../home-section/section-six'

const Content = () => {
    return (
        <main className='w-full flex relative items-center flex-col'>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <SectionThree></SectionThree>
            <SectionFour></SectionFour>
            <SectionFive></SectionFive>
            <SectionSix></SectionSix>
        </main>
    )
}

export default Content
