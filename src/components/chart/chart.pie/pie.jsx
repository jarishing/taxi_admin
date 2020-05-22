import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import View from './pie.view';
import Model from './pie.model';

class Pie extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:{
                labels: props.pieLabel,
                datasets: [{
                    data: props.pieData,
                    backgroundColor: [ '#158FD8', '#FF6384', '#FFCE56', '#42B8B8', '#CE28D7']
                }]
            }
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

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(Pie));