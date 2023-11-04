import { Container } from "react-bootstrap";
import Slider from "../Components/Slider/Slider";
import MainShop from '../Components/Shop/Shop'
const Shop =()=>{
    return (
        <Container>
            <Slider/>
            <MainShop />
        </Container>
    )
};

export default Shop;