const Model = function () {

    const onUsername = ( username ) =>{
        let result = { ... this.state };
        result.query.username = username;
        return this.setState( result );
    };

    const onPassword = ( password ) =>{
        let result = { ... this.state };
        result.query.password = password;
        return this.setState( result );
    };

    const Login = async ( username, password ) => {
        let result = { ... this.state };
        const { cookies } =this.props;
        try{
            let data = await this.props.login( username, password );
            cookies.set('login', true,{path:'/'});
            cookies.set('user', username,{path:'/'});
            cookies.set('access_token', data.payload.token,{path:'/'});
            return this.props.history.push('/main');
        }catch( error ){
            result.query.loginVaild = false;
            return this.setState( result );
        }
    };

    return { onUsername, onPassword, Login };
};

export default Model;