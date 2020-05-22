import axios from 'axios';
import { baseUrl } from '../constant/base';
import { getAccessToken } from '../store';

export const getOrder = async( orderId ) => {
    let AccessToken =  getAccessToken();

    let { data: result } = await axios.get(
        `${baseUrl}/order/${orderId}`,
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );

    return result.data;
};