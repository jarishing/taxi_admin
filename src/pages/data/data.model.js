import api from '../../api';
import moment from 'moment';

const Model = function () {

    const getData = async( filter ) =>{
        // let update = await api.analysis.getDataPage();
        let data;

        if( filter == "now")
            data = await api.analysis.getData('now', null );
        else
            data = await api.analysis.getData('data', filter );
        
        let result = {... this.state };

        result.loading = true; 
        await this.setState( result );

        result.startData= data.start;
        result.endData = data.end;
        result.discountData = data.discount;
        result.timerange = data.time;

        if( !filter || filter == "all" ){
            result.filter = false;
        }else{
            result.filter = true;
        }
        result.loading = false;
        return this.setState( result );
    };

    const onChange = async( e ) =>{
        let result = { ...this.state };
        result.filterTime = e.target.value;
        return this.setState( result );
    };

    const onCancel = async() => {
        let result = { ...this.state };
        result.filterTime = null;
        return this.setState( result );
    }

    return { getData, onChange, onCancel };
};

export default Model;
