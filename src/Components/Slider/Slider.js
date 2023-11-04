import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../Assets/banner_kids.png';
import banner2 from '../Assets/banner_mens.png';
import banner3 from '../Assets/banner_women.png';


const Slider = ()=>      
  {
  return (
    <Carousel className='mt-5 rounded'>
      <Carousel.Item interval={3000}>
      <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
         
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img
          className="d-block w-100"
          src={banner2}
          alt="First slide"
        />
         
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img
          className="d-block w-100"
          src={banner3}
          alt="First slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
 