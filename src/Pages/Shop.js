import { Container } from "react-bootstrap";
import Slider from "../Components/Slider/Slider";
import MainShop from '../Components/Shop/Shop';
import '../Components/Slider/slider.css'
const Shop =()=>{
    return (
        <Container className="container">
            <Slider/>
            <MainShop />
        </Container>
    )
};

export default Shop;