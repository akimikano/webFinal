import React from 'react';
import './AboutCountry.css'

const AboutCountry = props => {

    const country = props.aboutCountry

    return (
        <div className="AboutCountry" >

            <div className="Information">

                <div className="TextInformation">
                    <h3>Name: <span className="Bolder"> {country.name}</span> </h3>
                    <h3>Capital: <span className="Bolder">{country.capital}</span> </h3>
                    <h3>Population: <span className="Bolder">{country.population}</span> </h3>
                </div>

                <div className="FlagPhoto">
                    <img type="image" alt="Flag" src={country.flag} alt="photo" />
                </div>

            </div>

            <div className="allInformation">

                <div className="moreInformation">

                    <p> <strong>Region:</strong> {country.region}</p>
                    <p> <strong>Subregion:</strong> {country.subregion}</p>
                    <p> <strong>UTC Time:</strong> {country.timezones}</p>
                    <p> <strong>Neighbor Country:</strong></p>

                </div>

            </div>

            {props.children}

        </div>
    );
};

export default AboutCountry;