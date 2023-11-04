import { Link } from 'react-router-dom';
import './navbar.css'
const Navigation =()=>{
    return(
        <ul className='nav-ul'>
            <Link to='/'><li>What's New</li></Link>
            <Link to='/mens'><li>Mens</li></Link>
            <Link to='/womens'><li>Womens</li></Link>
            <Link to='/kids'><li>Kids</li></Link>
             
        </ul>
    )
};
export default Navigation;