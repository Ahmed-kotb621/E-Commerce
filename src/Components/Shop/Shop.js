import { Col, Container, Row } from "react-bootstrap";
import Item from "./Item";

const Shop =()=>{
    return(
        <Container className="pt-5 center" >
            <h2 className="text-center">What's New</h2>
            <Row>
                <Col>
                    <Item />
                </Col>
                
            </Row>
        </Container>
    )
};

export default Shop;