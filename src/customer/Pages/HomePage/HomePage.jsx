import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'
import { men_jeans } from '../../../Data/men_jeans'
import { men_shirt } from '../../../Data/men_shirt'
import { lengha_page1 } from '../../../Data/LenghaCholi'
import { women_dress } from '../../../Data/women_dress'
import { women_top } from '../../../Data/women_top'
import { women_jeans } from '../../../Data/women_jeans'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={women_jeans} sectionName={"women_jeans"}/>
            <HomeSectionCarousel data={women_dress} sectionName={"Women's Dress"}/>
            <HomeSectionCarousel data={women_top} sectionName={"Women's Top"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={men_jeans} sectionName={"Men's jeans"}/>
            <HomeSectionCarousel data={men_shirt} sectionName={"Men's shirt"}/>
        </div>
    </div>
  )
}

export default HomePage