import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './main.view';
import Model from './main.model';

import {withRouter} from 'react-router-dom';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            activeUser: null,
            activeDriver: null,
            ordering: null,
            mostPopularStart: null,
            mostPopularEnd: null,
            averageDistance: null,
            mostPopulatTime: null
        }
        this.model = Model.bind(this)();

    }

    componentDidMount(){
        this.model.getData();
    }

    render(){
        return(
            <View 
                { ... this.props } 
                { ... this.state }
                { ... this.model }
            />
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
    logined: state.baseReducer.login
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(Main));