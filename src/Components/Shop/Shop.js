import { Col, Container, Row } from "react-bootstrap";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchShopProducts } from "../../rtk/slices/shopSlice";

const Shop =()=>{
    const products = useSelector((state)=>state.shopProducts);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchShopProducts());
    },[]);
    return(

        <Container className="pt-5 mt-10 center" >
            <h2 className="text-center mb-5">New Collections.</h2>
            <Row>
                {products.map((product)=>(
                    <Col key={product.id}>
                        <Item product={product} title={product.title} image={product.image} description={product.description} price={product.price}/>
                    </Col>
                ))}
                
            </Row>
        </Container>
    )
};

export default Shop;