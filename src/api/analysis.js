import axios from 'axios';
import { baseUrl } from '../constant/base';
import { getAccessToken } from '../store';

export const getData = async ( page, filter ) => {
    let AccessToken =  getAccessToken();
    if ( filter == null || filter == "all" )
        filter = '';

    let { data: result } = await axios.get(
        `${baseUrl}/analysis/?page=${page}&timeRange=${filter}`,
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );

    return result.data;
}

export const getDataPage = async () => {
    let AccessToken =  getAccessToken();
    let { data: result } = await axios.get(
        `${baseUrl}/analysis/update`,
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );

    return result.data;
}