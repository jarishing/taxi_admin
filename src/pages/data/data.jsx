import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './data.view';
import Model from './data.model';

import {withRouter} from 'react-router-dom';

class Data extends Component {

    constructor(props){
        super(props);
        this.state = {
            startData: null,
            endData: null,
            discountData: null,
            timerange: null,
            loading: true,

            filter: false,
            filterTime: "now"
        }
        this.model = Model.bind(this)();

    }

    componentDidMount(){
        this.model.getData( "now" );
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

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(Data));