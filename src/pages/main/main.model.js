import api from '../../api';
import moment from 'moment';

const Model = function () {

    const getData = async() =>{
        let data = await api.analysis.getData('main');
        let result = { ... this.state };

        console.log( data );

        result.activeUser = data.activeUser;
        result.activeDriver = data.activeDriver;
        result.ordering = data.ordering;
        // result.mostPopularStart = data.analysisData.mostPopularStart.district? data.analysisData.mostPopularStart.district:null;
        // result.mostPopularEnd = data.analysisData.mostPopularEnd.district? data.analysisData.mostPopularEnd.district:null;
        // let averageDistance = data.analysisData.averageDistance / 1000;
        // result.averageDistance = averageDistance.toFixed(2);
        // result.mostPopulatTime = data.analysisData.mostPopularTime.timeRange? data.analysisData.mostPopularTime.timeRange:null;


        result.mostPopularStart = data.analysisData.mostPopularStart? data.analysisData.mostPopularStart.district:null;
        result.mostPopularEnd = data.analysisData.mostPopularEnd? data.analysisData.mostPopularEnd.district:null;
        let averageDistance = data.analysisData.averageDistance? data.analysisData.averageDistance / 1000: 0;
        result.averageDistance = averageDistance.toFixed(2);
        result.mostPopulatTime = data.analysisData.mostPopularTime? data.analysisData.mostPopularTime.timeRange:null;
        
        return this.setState( result );
    };

    const onActiveUserClick = () => {
        this.props.history.push('/User');
    };

    const onActiveDriverClick = () => {
        this.props.history.push('/Driver');
    };

    const onOrderingClick = () => {
        this.props.history.push('/Order');
    };

    return { getData, onActiveUserClick, onActiveDriverClick, onOrderingClick };
};

export default Model;
