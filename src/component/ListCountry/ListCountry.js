import React, {Fragment} from 'react';
import './ListCountry.css'

const ListCountry = props => {

    const allCountry = [...props.allcountry]

    return (

        <Fragment>

            {allCountry.map((item, index) => {

                return (

                    <div className="ListCountry"
                         key={item.numericCode}
                         onClick={() => {props.getCountry(item.name)}}
                             >
                        <img src={item.flag} />

                        <p>{item.name}</p>

                    </div>

                )

            })}


        </Fragment>

    );
};

export default ListCountry;