import React , {useState} from 'react';
import Navbar from '../../components/Navbar';


const DashboardLayout = (props) => {
    const [collapsed, setCollapsed] =  useState(true);

    const layout = (
        <div>
            <Navbar
                brand="Tats" 
                onClick={() => setCollapsed(!collapsed)}
                collapsed={collapsed}
            />
            {props.children}
        </div>
    )
    return layout
}

export default DashboardLayout;