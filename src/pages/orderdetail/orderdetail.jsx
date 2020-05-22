import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './orderdetail.view';
import Model from './orderdetail.model';

class OrderDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: null,
            start: null,
            end: null,
            detail: null,
            status: null,
            distance: null,
            user: null,
            driver: null,
            comment: null,
            loading: true
        };
        this.model = Model.bind(this)();
    }

    componentDidMount(){
        this.model.getData( this.props.orderId );
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
    orderId : state.searchReducer.orderId
    // orderId : "5c0108a40b2ff36840598552"
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    
});

export default connect( mapStateToProps, mapDispatchToProps )(OrderDetail);