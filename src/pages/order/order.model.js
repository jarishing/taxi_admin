import api from '../../api';

const Model = function () {

    const getOrderList = async( orderType ) => {
        let result = { ... this.state };
        let data = await api.orderList.getOrderList( orderType );

        result.orderList = data;
        result.listType = orderType;
        result.searchtype= orderType;
        return this.setState( result );
    }

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

    return { getOrderList, setListType, onCancel };
};

export default Model;