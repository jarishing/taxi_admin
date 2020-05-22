import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './dropmenu.view';
import Model from './dropmenu.model';

class DropMenu extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false,
            // timeRange: null
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

export default connect( mapStateToProps, mapDispatchToProps )(DropMenu);