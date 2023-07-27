import SectionOne from '../../../components/home-section/section-one'
import SectionTwo from '../../../components/home-section/section-two'
import SectionThree from '../../../components/home-section/section-three'
import SectionFour from '../../../components/home-section/section-four'
import SectionFive from '../../../components/home-section/section-five/SectionFive'
import SectionSix from '../../../components/home-section/section-six'

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
