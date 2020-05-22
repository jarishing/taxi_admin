import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './user.view';
import Model from './user.model';

class User extends Component {

    constructor(props){
        super(props);
        this.state = {
            userList: [],
            listType: null,
            searchtype: 'active'
        }
        this.model = Model.bind(this)();
    }

    componentDidMount(){
        this.model.getUserList( 'active' );
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

export default connect( mapStateToProps, mapDispatchToProps )(User);