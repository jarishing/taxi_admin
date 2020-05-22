import api from '../../api';

const Model = function () {

    const getData = async( userId ) =>{
        if(!userId){
            let url = new URL(window.location.href);
            userId = url.searchParams.get("userId"); 
        }

        let UserData = api.user.getUser( userId ),
            UserOrder = api.user.getUserOrder( userId ),
            UserComment = api.user.getUserCommemt( userId ),
            result = { ... this.state };

        [ UserData, UserOrder, UserComment ] = await Promise.all([ UserData, UserOrder, UserComment ]);

        result.UserData = UserData;
        result.UserOrder = UserOrder;
        result.UserComment = UserComment;

        return this.setState( result );
    };

    const banUser = async( userId ) => {
        let UserData = await api.user.banUser( userId ),
            result = { ... this.state };

        result.UserData = UserData;
        return this.setState( result );
    }

    const unbanUser = async( userId ) => {
        let UserData = await api.user.unbanUser( userId ),
            result = { ... this.state };

        result.UserData = UserData;
        return this.setState( result );
    }

    return { getData, banUser, unbanUser };
};

export default Model;
