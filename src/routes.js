import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import * as baseAction from './reducers/base/action';

// import PrivateRoutes from './privateRoute';

// import App from './App';
import Login from './pages/login/login';
import Main from './pages/main/main';
import User from './pages/user/user';
import UserDetail from './pages/userdetail/userdetail';
import Driver from './pages/driver/driver';
import DriverDetail from './pages/driverdetail/driverdetail';
import Order from './pages/order/order';
import OrderDetail from './pages/orderdetail/orderdetail';
import Data from './pages/data/data';
  
// async autoLogin ( ) {
//     console.log("heelo");
//     console.log(this.props);
//     // if( !this.props.logined ){
//     //     console.log("===p1=======");
//     //     console.log(cookies.get('login'));
//     //     if( cookies.get('login') === 'true' ){
//     //         console.log( cookies.get('user'), cookies.get('password') );
//     //         await this.props.login( cookies.get('user'), cookies.get('password') );
//     //     }
//     // }
// }

function AutoLogin( props ){
    const { cookies, logined, setLoginInfo } = props;
    if( logined );
    else if( cookies.get('login') == "true" && !logined ){
        let user = cookies.get('user');
        let access_token = cookies.get('access_token');
        setLoginInfo( user, access_token );
    }else{
        return <Redirect 
            to={{
                pathname: "/",
                state: { from: props.location }
            }}
        />
    }
    return(
        <Switch>
            <PrivateRoute path="/main" component={Main}/>
            <PrivateRoute path="/user" component={User}/>
            <PrivateRoute path="/userDetail" component={UserDetail}/>
            <PrivateRoute path="/driver" component={Driver}/>
            <PrivateRoute path="/driverDetail" component={DriverDetail}/>
            <PrivateRoute path="/order" component={Order}/>
            <PrivateRoute path="/orderDetail" component={OrderDetail}/>
            <PrivateRoute path="/data" component={Data}/>
        </Switch>
    )
}

function PrivateRoute({ component: Component, ...rest }){
    return(
        <Route {... rest} render={() => <Component/>}/>
    )
};

// <PrivateRoute path="/main" component={Main} props={this.props}/>

class Routes extends React.Component {
    
    shouldComponentUpdate = () => true;

    render(){
        return (

            <BrowserRouter>
                <div style={{width: '100%', height:'100%'}}>
                    <Route path="/" exact component={Login}/>
                    <AutoLogin { ... this.props } />
                </div>
            </BrowserRouter>
        )
    }
}

// <PrivateRoutes path="/main" component={Main}/>
// <PrivateRoute path="/user" component={User} logined={this.props.logined}/>
// <PrivateRoute path="/driver" component={Driver} logined={this.props.logined}/>
// <PrivateRoute path="/driverDetail" component={DriverDetail} logined={this.props.logined}/>
// <PrivateRoute path="/order" component={Order} logined={this.props.logined}/>
// <PrivateRoute path="/orderDetail" component={OrderDetail} logined={this.props.logined}/>

// <Route path="/login" component={Login}/>

// <Route path="/User" component={User}/>
// <Route path="/Driver" component={Driver}/>
// <Route path="/DriverDetail" component={DriverDetail}/>
// <Route path="/Order" component={Order}/>
// <Route path="/OrderDetail" component={OrderDetail}/>
// <Route path="/Main" component={Main}/>
// <Route path="/" component={Login}/>

const mapStateToProps = ( state, ownProps ) => ({
    logined: state.baseReducer.login
    // logined: true
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    // login: ( username, password) => dispatch( baseAction.login(username, password ))
    setLoginInfo: ( user, token ) => dispatch( baseAction.setLoginInfo( user, token ))
});


export default withCookies(connect( mapStateToProps, mapDispatchToProps )(Routes));
