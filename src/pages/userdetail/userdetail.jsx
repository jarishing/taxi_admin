import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './userdetail.view';
import Model from './userdetail.model';

class UserDetail1 extends Component {

    constructor(props){
        super(props);
        this.state = {
            UserData: null,
            UserOrder: null,
            UserComment: null
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
    // userId : "5bfd4b2b8f5e8a4097681f8b"
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    
});

export default connect( mapStateToProps, mapDispatchToProps )(UserDetail1);