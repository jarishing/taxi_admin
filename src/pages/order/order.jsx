import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './order.view';
import Model from './order.model';

class Order extends Component {

    constructor(props){
        super(props);
        this.state = {
            orderList: [],
            listType: null,
            searchtype: 'new'
        }
        this.model = Model.bind(this)();
    }

    componentDidMount(){
        this.model.getOrderList('new');
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

export default connect( mapStateToProps, mapDispatchToProps )(Order);