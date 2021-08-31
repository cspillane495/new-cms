import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from '../../components/Grid';
import ItemsListLayout from '../../layouts/ItemsListLayout';
import { fetchUsers } from '../../actions/users'
const headers = [
    {title: 'Email', dataIndex: 'email'},
]
const Users = (props) => {
    const list = props.users
    useEffect(() => {
        props.fetchUsers();
    }, []);
    return (
        <Container>
            <Row>
                <Col>
                    <ItemsListLayout list={list} headers={headers} />
                </Col>
            </Row>
        </Container>
    )
}

function mapStateToProps({users}) {
    return {users}
}

export default connect(mapStateToProps, { fetchUsers })(Users)