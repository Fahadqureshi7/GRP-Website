import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const AboutImageCarousel = () => {
  return (
    <div>
         <Carousel interval={null}>
      <Carousel.Item>
        <img src='\GrpEng\about-image-3.png' className='mt-3 h-[600px] w-full'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img src='\GrpEng\about-image-4.png' className='mt-3 h-[600px] w-full' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='\GrpEng\about-image-2.jpg' className='mt-1 h-[614px] w-full' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='\GrpEng\about-image-1.jpg' className='mt-3 h-[600px] w-full'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default AboutImageCarousel
