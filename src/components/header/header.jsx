import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './header.view';
import Model from './header.model';

import {withRouter} from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            visible: false
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
    
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(Header));