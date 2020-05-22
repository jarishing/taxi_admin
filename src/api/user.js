import axios from 'axios';
import { baseUrl } from '../constant/base';
import { getAccessToken } from '../store';

export const getUser = async( userId ) => {
    let AccessToken =  getAccessToken();

    let { data: result } = await axios.get(
        `${baseUrl}/user/${userId}`,
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );
    
    return result.data;
};

export const getUserOrder = async( userId ) => {
    let AccessToken =  getAccessToken();

    let { data: result } = await axios.get(
        `${baseUrl}/user/order/${userId}`,
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );
    
    return result.data;
};

export const getUserCommemt = async( userId ) => {
    let AccessToken =  getAccessToken();

    let { data: result } = await axios.get(
        `${baseUrl}/user/comment/${userId}`,
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );
    
    return result.data;
};

export const banUser = async( userId ) => {
    let AccessToken =  getAccessToken();
    
    let{ data: result } = await axios.put(
        `${baseUrl}/user/ban/${userId}`,{},
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );

    return result.data;
};

export const unbanUser = async( userId ) => {
    let AccessToken =  getAccessToken();

    let{ data: result } = await axios.put(
        `${baseUrl}/user/ban/release/${userId}`,{},
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );

    return result.data;
};

export const setDriverClass = async( userId, driverClass ) => {
    let AccessToken =  getAccessToken();

    let{ data: result } = await axios.put(
        `${baseUrl}/user/setgrade/${userId}`,{ grade: driverClass },
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );

    return result.data;
};

export const vaildDriver = async( userId ) => {
    let AccessToken =  getAccessToken();

    let{ data: result } = await axios.put(
        `${baseUrl}/user/valid/${userId}`,{},
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );

    return result.data;
}

export const deleteDriverAccount = async( userId ) => {
    let AccessToken =  getAccessToken();

    return await axios.delete(
        `${baseUrl}/user/${userId}`,
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );
};