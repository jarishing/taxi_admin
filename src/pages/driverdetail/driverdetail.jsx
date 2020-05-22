import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './driverdetail.view';
import Model from './driverdetail.model';

import {withRouter} from 'react-router-dom';

class DriverDetail1 extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false,
            visible: false,
            class: null
        }
        this.model = Model.bind(this)();
    }

    componentDidMount(){
        this.model.getData( this.props.userId );
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
    userId : state.searchReducer.userId
    // userId: "5c346c0db322f711cf9cceed"
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    
});

export default withRouter( connect( mapStateToProps, mapDispatchToProps )(DriverDetail1));