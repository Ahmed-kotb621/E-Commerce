import { Container } from "react-bootstrap";
import cart_image from '../Assets/cart_icon.png';
import fav_icon from '../Assets/heart.png';
import './navbar.css'
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
 
const NavBar = ()=>{
    return(
        <Container>
            <div className="main-header">
                <h3><Link to='/'>Shopper</Link></h3>
                <div className="main-ul">
                    <Link to='/login'><button className="login">Log In</button></Link>
                    <ul className="main-ul">
                        <li><Link to='/cart'><img src={cart_image} alt="cart icon"/></Link></li>
                        <li><Link to='/favorites'><img src={fav_icon} alt="cart icon"/></Link></li>
                    </ul>
                </div>
            </div>
            <Navigation/>
        </Container>
    )
};
export default NavBar;