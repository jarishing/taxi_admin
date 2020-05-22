import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './dropMenuDriver.view';
import Model from './dropMenuDriver.model';

class DropMenuDriver extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false,
            origin: props.value
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

export default connect( mapStateToProps, mapDispatchToProps )(DropMenuDriver);