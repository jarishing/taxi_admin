const Model = function () {

    const onUserItemClick = async ( userId ) => {
        await this.props.setSearchUserId( userId );
        return this.props.history.push( `/userdetail/?userId=${userId}` );
    }

    const onDriverItemClick = async ( driverId ) => {
        await this.props.setSearchUserId( driverId );
        return this.props.history.push( `/driverdetail/?driverId=${driverId}` );
    }

    const onOrderItemClick = async ( orderId ) => {
        await this.props.setSearchOrderId( orderId );
        return this.props.history.push( `/orderdetail/?orderId=${orderId}` );
    }

    return { onUserItemClick, onDriverItemClick, onOrderItemClick };
};

export default Model;
