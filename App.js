import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPeople,fetchvehicle } from "./actions/user";

import { bindActionCreators } from 'redux'

class App extends Component {
    componentDidMount() {
        this.props.fetchPeople();
         this.props.fetchvehicle();
    }

    render() {
        console.log("asasa",this.props.vehicle)
        console.log("user",this.props.user)
        const { isFetching, data } = this.props.user;
        var  result = this.props.vehicle;
        console.log("da",result)



        if(isFetching) {
            return <span>Loading...</span>
        }
        return(
            <div>

            <div className="container">

                <ul className="people">
                    {data.map(item => <li key={item.name}>
                        <span>Name: {item.name}</span>
                        <span>Height: {item.height}</span>
                    </li>)}
                </ul>

                <ul className="people">
                    {result.data.map(item => <li key={item.name}>
                        <span>Name: {item.hair_color}</span>
                        <span>Height: {item.name}</span>
                        <div>Url:<u> {item.homeworld}</u></div>
                    </li>)}
                </ul>
            </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        vehicle:state.vehicle
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ fetchPeople,fetchvehicle }, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)
