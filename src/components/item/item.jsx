import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as searchAction from '../../reducers/search/action';

import View from './item.view';
import Model from './item.model';

class Item extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
        this.model = Model.bind(this)();
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
    setSearchUserId: userId => dispatch( searchAction.setSearchUserId( userId ) ),
    setSearchOrderId: orderId => dispatch( searchAction.setSearchOrderId( orderId ) )
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(Item));