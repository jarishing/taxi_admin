import axios from 'axios';
import { baseUrl } from '../constant/base';
import { getAccessToken } from '../store';

export const getOrderList = async ( orderType ) => {
    let AccessToken =  getAccessToken();

    let { data: result } = await axios.get(
        `${baseUrl}/order/?status=${orderType}`,
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    )

    return result.data; 
}