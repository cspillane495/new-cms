import React from 'react';
import Navbar from '../../components/Navbar';
import { Row, Container } from '../../components/Grid';
import Display from '../FormPage/Display'
import {Link} from 'react-router-dom';
import ReactPlayer from "react-player";

const Dashboard = (props) => {
    console.log(props);
    return (
        
        <Container >
            <h3>Welcome to the everpresent existence. Enjoy the ride...</h3>
            <h4>Suck my balls</h4>
            <Row>
            <ReactPlayer url="https://www.youtube.com/watch?v=HbN3zmWCY3g"/>
            </Row>
            <Row>
            <ReactPlayer url="https://www.youtube.com/watch?v=HbN3zmWCY3g"/>
            </Row>
        </Container>
    )
}
    
export default Dashboard;