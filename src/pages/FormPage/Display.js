import React from 'react';
import { Row } from '../../components/Grid';
import {Link} from 'react-router-dom';

const Display = (props) =>{
    function renderFormItems(formItems){ 
        if (!formItems) return null 
       return Object.keys(formItems).map((keyName, i)=> {
            return (
                <li key={i}>
                    {`${keyName}: ${formItems[keyName]}`}
                    <Link 
                        to="/Form" className="nav-link"
                    >
                        Form
                    </Link>    
                </li>
            )
        })
    }
    
    return(
        <Row>
           {Object.keys(props.formItems).length >= 1 && <h2>Diplay Form Items</h2>}
            <ul>
            {renderFormItems(props.formItems)}
            </ul>
        </Row>    
       
    )
} 

export default Display;