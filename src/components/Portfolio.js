import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function Portfolio() {

    return (

        <div className='portfolio' id='portfolio'>
            <div className='title'>
                <div className='oppa1'>Portfolio</div>
                <div className='oppa2'>Portfolio</div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Kartvizit</Tab>
                    <Tab>Kurumsal Kimlik</Tab>
                    <Tab>3D Model</Tab>
                </TabList>

                <TabPanel>
                    <div className='tp1'>
                        <div className='box'> </div>
                        <div className='box'> </div>
                        <div className='box'> </div>
                        <div className='box'> </div>
                        <div className='box'> </div>

                    </div>
                </TabPanel>
                <TabPanel>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><img src="/logo/p1.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        ...
                    </Swiper>
                </TabPanel>
                <TabPanel>
                    <div className='tp1'>
                        <div className='box'> </div>
                        <div className='box'> </div>
                        <div className='box'> </div>
                        <div className='box'> </div>
                        <div className='box'> </div>

                    </div>
                </TabPanel>
            </Tabs>
            

            



        </div>
    )
}
