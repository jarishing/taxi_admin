import api from '../../api';

const Model = function () {

    const getDriverList = async( searchType ) => {
        let result = { ... this.state },
            userType = 'driver';

        if( searchType == "nonVaild" || searchType == "banned" )
            userType = '';
            
        let data = await api.userList.getUserList( userType, searchType );
        
        result.driverList = data;
        result.listType = searchType;
        result.searchtype= searchType;
        return this.setState( result );
    };

    const setListType = async( searchType ) => {
        let result = { ... this.state };
        result.searchtype = searchType;
        return this.setState( result );
    }

    const onCancel = async( searchType ) =>{
        let result = { ...this.state };
        result.searchtype = searchType;
        return this.setState( result );
    }

    return { getDriverList, setListType, onCancel };
};

export default Model;
