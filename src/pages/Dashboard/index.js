import React from 'react';
import Navbar from '../../components/Navbar';
import { Row } from '../../components/Grid';
import Display from '../FormPage/Display'
import {Link} from 'react-router-dom';
const Dashboard = (props) => {
    console.log(props);
    return (
        <div>
          
           
             <h3>Welcome to the everpresent existence. Enjoy the ride...</h3>
        
        </div>
    )
}

//  return(
//         <Row>
//             <h2>Diplay Form Items</h2>
//             <ul>
//                 {Display()}
//             {renderFormItems(props.formItems)}
//             </ul>
//         </Row>    
       
//     )
    
export default Dashboard;