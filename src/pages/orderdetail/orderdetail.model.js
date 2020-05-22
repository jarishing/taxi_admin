import api from '../../api';

const Model = function () {

    const getData = async( orderId ) => {
        if(!orderId){
            let url = new URL(window.location.href);
            orderId = url.searchParams.get("orderId"); 
        }

        let Order = await api.order.getOrder( orderId ),
            result = { ... this.state },
            distance;

        console.log( Order );
    
        distance = Order.criteria.distance / 1000;
        distance = distance.toFixed(1);
        
        result.id = Order.orderId;
        result.start = Order.start.address;
        result.end = Order.end.address;
        result.detail = Order.criteria;
        result.status = Order.status;
        result.distance = distance;
        result.user = Order.orderBy;
        result.driver = Order.acceptBy? Order.acceptBy:null;
        result.comment = Order.userComment? Order.userComment:null;
        result.loading = false;

        return this.setState( result );
    }


    return { getData };
};

export default Model;