import Carousel from 'react-bootstrap/Carousel';
import './slider.css'
import slider1 from '../Assets/Images/slider1.jpg'
import slider2 from '../Assets/Images/slider2.jpg'
import slider3 from '../Assets/Images/slider3.jpg'


const Slider = ()=>      
  {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={2000}>
      <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img
          className="d-block w-100"
          src={slider2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Slider;
 