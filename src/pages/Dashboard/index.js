import React from 'react';
import { Row, Container, Col } from '../../components/Grid';
import EditableItem from '../../components/Table/EditableItem';

const Dashboard = (props) => {
    // console.log(props);
    return (
        
        <Container >
            <EditableItem text="DashBoard">Dashboard</EditableItem>
        </Container>
    )
}
    
export default Dashboard;