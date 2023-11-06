import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../rtk/slices/cartSlice';
const Item = (props)=>{
   
  const dispatch = useDispatch();
    return (
        <Card className='item-card' style={{ borderRadius:'15px', width: '18rem',marginBottom:'30px',border:'0',boxShadow:'0 2px 15px rgb(0 0 0 / 10%)'}}>
          <Card.Img style={{height:'200px',width:'200px',margin:'auto',padding:'20px'}} variant="top" src={props.image} />
          <hr/>
          <Card.Body>
          <Card.Title style={{height:'50px',overflow:'hidden'}}>{props.title}</Card.Title>
          <Card.Text style={{height:'50px',overflow:'hidden'}}>
           {props.description}
          </Card.Text>
          <Card.Text style={{fontWeight:'bold'}}>{props.price}$</Card.Text>
          <Button className='btn-addcart' style={{background:'#010101',color:'#fff',border:'none ',borderRadius:'15px'}} onClick={()=>dispatch(addToCart(props.product))}>Add To Cart</Button>
          <Button className='btn-showcart' style={{marginLeft:'20px',background:'transparent',color:'#000',border:'1px solid #000 ',borderRadius:'15px'}}>Show</Button>
          </Card.Body>
        </Card>
    )
};

export default Item;