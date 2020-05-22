import React            from 'react';
import styled           from 'styled-components';

import Header           from '../../components/header/header';
import Item             from '../../components/item/item';
import DropMenu         from '../../components/dropMenuDriver/dropMenuDriver';

export default( props ) => {
    const orderList = props.orderList;
    console.log( orderList );

    return (
        <div style={{width: '100%', height:'100%'}}>
            <Header/>
            <UserPage>
                <div className="user-page-title-row">
                    <div className="user-page-title" onClick={() => console.log(props)}>
                        訂單列表
                    </div>
                    <DropMenu
                        padding={"1vh 2vh"}
                        width={"50vw"}
                        fontSize={"2.5vh"}
                        type={'ORDER'}
                        onChange={ props.setListType }
                        onCancel={ props.onCancel }
                        onSubmit={ props.getOrderList }
                        value={ props.searchtype }
                    />
                </div>
                <div className="user-page-main">
                    {
                        orderList.length > 0?
                        <div>
                            {
                                orderList.map( ( item, index ) => (
                                    <Item 
                                        type="Order"
                                        key={index}
                                        orderId={ item._id }
                                        orderShowingId = { item.orderId }
                                        status={ item.status }
                                        start={ item.start.address }
                                        end={ item.end.address }
                                        cost={ item.criteria.cost }
                                        taxiType={ item.criteria.taxiType }
                                        passenger={ item.criteria.passenger }
                                    />
                                ))
                            }
                        </div>:
                        <div className="user-page-main-empty">
                            暫時未有訂單
                        </div>
                    }
                </div>
            </UserPage>
        </div>
    )
};


const UserPage = styled.div`
    position: absolute;
    top: 8.5vh;
    background-color: #F1F1F1;
    bottom: 0;
    left: 0;
    right: 0;

    &> .user-page-main{
        position: absolute;
        bottom: 0;
        top: 9vh;
        left: 0;
        right: 0;
        overflow: scroll;

        &> .user-page-main-empty{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3vh;
        }
    }

    &> .user-page-title-row{
        padding: 2.5vh 2.5vh 0 2.5vh;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &> .user-page-title{
            font-size: 3.5vh;
        }

        &> .ant-select{
            &> .ant-select-selection{
                border: 0;
                background-color: #F1F1F1;
            }
        }
    }
`