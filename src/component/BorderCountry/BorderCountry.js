import React from 'react';
import './BorderCountry.css'

const BorderCountry = props => {

    const neighborCountryAre = props.neighborCountry

    return (
        <div className="NeighborCountry">

            {neighborCountryAre.name.map((item, index) => {
                return (

                    <div className="neighborCountryItem"  key={index}>

                        <img src={neighborCountryAre.flag[index]} alt=""/>
                        <p>{item}</p>

                    </div>

                )
            })}

        </div>
    );
};

export default BorderCountry;