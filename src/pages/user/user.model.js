import api from '../../api';

const Model = function () {

    const getUserList = async( searchType ) =>{
        let result = { ... this.state };
        let data = await api.userList.getUserList( 'user', searchType );
        
        result.userList = data;
        result.listType = searchType;
        result.searchtype = searchType;
        return this.setState( result );
    };

    const setListType = async( searchType ) => {
        let result = { ... this.state };
        result.searchtype = searchType;
        return this.setState( result );
    };

    const onCancel = async( searchType ) =>{
        let result = { ...this.state };
        result.searchtype = searchType;
        return this.setState( result );
    };

    return { getUserList, setListType, onCancel };
};

export default Model;
