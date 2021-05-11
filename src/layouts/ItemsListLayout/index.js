import { Container, Row, Col } from '../../components/Grid';
import Table from '../../components/Table';

const ItemsListLayout = (props) => {
    return (
        <Container>
            <Row>
                 <h2>{props.title}</h2>
            </Row>
            <Row>
                <Col>
                    <Table headers={props.headers} list={props.list} />
                </Col>
            </Row>
        </Container>        
    )
}

export default ItemsListLayout;