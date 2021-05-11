import React , {useState} from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import {logout} from "../../actions/account";


const DashboardLayout = (props) => {
    const [collapsed, setCollapsed] =  useState(true);

    const layout = (
        <div>
            <Navbar
                history={props.history}
                brand="Wine Reels CMS" 
                onClick={() => setCollapsed(!collapsed)}
                collapsed={collapsed}
                logout={props.logout}
            />
            {props.children}
        </div>
    )
    return layout
}
function mapStatetoProps(){
    return {}
}

export default connect(mapStatetoProps, {logout})(DashboardLayout);