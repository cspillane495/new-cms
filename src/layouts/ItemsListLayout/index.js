import { Container, Row, Col } from '../../components/Grid';
import Table from '../../components/Table';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { ChevronLeft } from 'react-bootstrap-icons';
import './index.css';

const ItemsListLayout = (props) => {
    return (
        <Container>
            <Row>
                <Link to={props.back}><ChevronLeft /></Link>
                <h2>{props.title}</h2>
            </Row>
            <Link to={props.path}>
                <Button>
                    Add New
                </Button>
            </Link>
            <Row>
                <Col>
                    <Table 
                        headers={props.headers} 
                        list={props.list} 
                        checkbox
                    />
                </Col>
            </Row>
        </Container>        
    )
}

export const TableImg = (props) => {
    const noData = 'No image data';
   
    switch(props.type) {
        case 'audio/mpeg': 
            return noData
        case 'video/mp4': 
            return noData
        default:
            return (
                <div className="table-item-image">
                    <img src={props.src} />
                </div>
            )
    }
}

export default ItemsListLayout;