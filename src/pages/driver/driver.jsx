import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './driver.view';
import Model from './driver.model';

class Driver extends Component {

    constructor(props){
        super(props);
        this.state = {
            driverList: [],
            listType: null,
            searchtype: 'active'
        }
        this.model = Model.bind(this)();
    }

    componentDidMount(){
        this.model.getDriverList( 'active' );
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
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    
});

export default connect( mapStateToProps, mapDispatchToProps )(Driver);