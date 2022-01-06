import React from 'react';
import './MainListCountry.css'

const MainListCountry = props => {

    return (
        <div className="MainListCountry" >
            <h3>List Country:</h3>
            {props.children}
        </div>
    );

};

export default MainListCountry;