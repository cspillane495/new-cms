import React from 'react';

const DashboardLayout = (props) => {
    const layout = (
        <div>
            {props.children}
        </div>
    )
    return layout
}

export default DashboardLayout;