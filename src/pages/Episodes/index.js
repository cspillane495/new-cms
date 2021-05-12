import React from 'react';
import { Row, Container, Col } from '../../components/Grid';
import ItemsListLayout from '../../layouts/ItemsListLayout';

const headers = [
    {
        title: 'Title',
        dataIndex: 'title',
        render: (text) => <a href="">{text}</a>
    },
    {
        title: 'Date',
        dataIndex: 'date',
        render: (date) => <span style={{color: 'red'}}>{date}</span>
    },
    {
        title: 'Tags',
        dataIndex: 'tags'
    },
    {
        title: 'Active',
        dataIndex: 'active',
        render: (active) => <span>{active ? 'true':'false'}</span>
    },
]

const list = [
    {
        title: 'Hello World',
        date: '1-2-2021',
        tags: 'tag, taag, taaag',
        active: true
    },
    {
        title: 'Hello World 2',
        date: '1-3-2021',
        tags: 'fag, faag, faaag',
        active: false
    }
]

const Episodes = (props) => {
    return (   
        <Container >
            <h3>Title</h3>
            <Row>
                <Col>
                    <ItemsListLayout list={list} headers={headers} />
                </Col>
            </Row>
        </Container>
    )
}
    
export default Episodes;