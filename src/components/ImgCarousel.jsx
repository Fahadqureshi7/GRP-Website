import Carousel from 'react-bootstrap/Carousel';
import Img1 from '/img1.jpeg';
import Img2 from '/img2.jpeg';
import Img3 from '/img3.jpeg';

function ImgCarousel() {
  return (
    <Carousel interval={2000}>
      <Carousel.Item>
        <img 
          src={Img1} 
          className='mt-3 w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover'
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img 
          src={Img2} 
          className='mt-3 w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover' 
          alt="Second slide"
        />
        <Carousel.Caption>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img 
          src={Img3} 
          className='mt-3 w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover'
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgCarousel;
