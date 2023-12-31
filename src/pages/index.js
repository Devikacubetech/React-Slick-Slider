import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useContext } from 'react'
import dynamic from 'next/dynamic'
import HalfPreviousAndNextSlides from '@/Components/HalfPreviousAndNextSlides'
import ModeBtn from '@/Components/ModeBtn'
import { myContext } from '@/Components/Contextapi'
const ReverseAutoPlay = dynamic(import('@/Components/ReverseAutoPlay'))
const Slider1 = dynamic(import('@/Components/Slider1'));
const AutoPlaySlider = dynamic(import('@/Components/AutoPlaySlider'));
const HalfNextSlides = dynamic(import('@/Components/HalfNextSlides'));
const HalfPreviousSlide = dynamic(import('@/Components/HalfPreviousSlide'));
const CustomizArrows = dynamic(import('@/Components/CustomizArrows'));

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { mode } = useContext(myContext);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModeBtn />
      <section className={(mode) ? 'text-dark bg-white' : 'text-white bg-dark'}>
        <div className='intro px-3'>
          <h2 className='pt-5 text-decoration-underline'>Apply Slick Slider in React.js or Next.js</h2>
          <div>
            <p className='fw-bold mt-5 text-info'>First install two packages </p>
            <p>npm install react-slick</p>
            <p>npm install slick-carousel</p>
            <p className='fw-bold mt-5 text-info'> Import css files </p>
            <p>import "slick-carousel/slick/slick.css";</p>
            <p>import "slick-carousel/slick/slick-theme.css";</p>
            <p className='fw-bold mt-5 text-info'> For More Information </p>
            <p><a href='https://www.npmjs.com/package/react-slick?activeTab=readme' target='_blank'> React Slick</a></p>
          </div>
        </div>
        <Slider1 />
        <AutoPlaySlider />
        <ReverseAutoPlay />
        <HalfPreviousAndNextSlides />
        <HalfNextSlides />
        <HalfPreviousSlide />
        <CustomizArrows />
        <div className='px-3 py-5 text-end'>
          <p className='fw-bold'>
            For More Examples
          </p>
          <p><a href='https://react-slick.neostack.com/docs/example/simple-slider' target='_blank'>React Slick Sliders Examples</a></p>
        </div>
      </section>
    </>
  )
}
