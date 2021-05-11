import React from 'react';
import { Row, Container, Col } from '../../components/Grid';
import ItemsListLayout from '../../layouts/ItemsListLayout';

const headers = [
    {title: 'Title'}
]

const Episodes = (props) => {
    return (   
        <Container >
            <h3>Title</h3>
            <Row>
                <Col>
                    <ItemsListLayout list={['a']} headers={headers} />
                </Col>
            </Row>
        </Container>
    )
}
    
export default Episodes;