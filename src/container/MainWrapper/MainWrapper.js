import React, {Component} from 'react';
import axios from "axios";

import MainListCountry from "../../component/MainListCountry/MainListCountry";
import AboutCountry from "../../component/AboutCountry/AboutCountry";
import BorderCountry from "../../component/BorderCountry/BorderCountry";
import ListCountry from "../../component/ListCountry/ListCountry";
import Empty from "../../component/Empty/Empty";

import './MainWrapper.css'

class MainWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allCountry:[],
            selectedCountry:[],
            neighborCountry:[],
            showModal:false
        }

    }

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then ((data) => {
                console.log(data.data)
                this.setState({allCountry: data.data})});
    }

    getBordersCountry = (data) => {
        const selectedCountry = data
        const allCountryArray = [...this.state.allCountry]

        const neighborCountry  = {
            name:[],
            flag: [],
        }

        selectedCountry.borders.forEach((item) => {
            allCountryArray.forEach((list) => {

                if(item === list.alpha3Code){

                    neighborCountry.name.push(list.name);
                    neighborCountry.flag.push(list.flag);

                }
            });
        });

        return neighborCountry
    }

    getAboutCountry = (textCountry) => {

        axios.get(`https://restcountries.eu/rest/v2/name/${textCountry}?fullText=true`)
            .then ((data) => {

                this.setState({
                    selectedCountry:data.data[0],
                    neighborCountry:this.getBordersCountry(data.data[0])
                })

            });

    }

    render() {
        return (
            <div className="MainWrapper">

                <MainListCountry>

                    <ListCountry
                        getCountry={this.getAboutCountry}
                        allcountry={this.state.allCountry}
                    />

                </MainListCountry>

                {
                    (this.state.selectedCountry.length) !== 0 ?

                    <AboutCountry
                        aboutCountry={this.state.selectedCountry}
                    >
                        <BorderCountry
                            neighborCountry={this.state.neighborCountry}
                        />
                    </AboutCountry>

                    : <Empty/>
                }


            </div>
        );
    }
}

export default MainWrapper;