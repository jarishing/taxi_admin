import React            from 'react';
import styled           from 'styled-components';

import Header           from '../../components/header/header';
import Item             from '../../components/item/item';
import DropMenu         from '../../components/dropMenuDriver/dropMenuDriver';

import { Icon, Badge, Select, Modal }         from 'antd';



export default( props ) => {
    console.log("=======detail========");
    console.log(props);
    return (
        <div style={{width: '100%', height:'100%'}}>
            <Header/>
            <DetailPage>
                <div className="detail-page-title-row">
                    <div className="detail-page-title">
                        司機資料
                    </div>
                </div>
                <div className="detail-page-main-row">
                    {
                        props.UserData?
                        <div className="detail-page-main">
                            <div className="detail-page-class-selector">
                                <DropMenu
                                    padding={"1vh 2vh"}
                                    width={"50vw"}
                                    fontSize={"2.5vh"}
                                    type={'CLASS'}
                                    onChange={ props.setClassType }
                                    onCancel={ props.onCancel }
                                    onSubmit={ props.setDriverClass }
                                    value={ props.class }
                                />
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    名稱:
                                </div>
                                <div className="detail-page-data">
                                    { props.UserData.username }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    電話號碼:
                                </div>
                                <div className="detail-page-data">
                                    { props.UserData.telephone_no }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    車牌號碼:
                                </div>
                                <div className="detail-page-data">
                                    { props.UserData.vehicle_reg_no }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    的士車牌證:
                                </div>
                                <div className="detail-page-data">
                                    { 
                                        <div 
                                            className="detail-page-data-image"
                                            onClick={() => props.openImage( props.UserData.taxi_driver_id_photo )}
                                        >
                                            按此查看
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    評價:
                                </div>
                                <div className="detail-page-data">
                                    { 
                                        props.UserData.grade == 'S'?
                                        "最優先":
                                        props.UserData.grade 
                                    }({ props.UserData.mark })
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    狀態:
                                </div>
                                <div className="detail-page-data">
                                    {
                                        props.UserData.ban?
                                        <Badge status="error" text="禁止中" />:
                                        props.UserData.valid?
                                        <Badge status="processing" text="正常"/>:
                                        <Badge status="error" text="待審批中" />
                                    }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-button-wrapper">
                                    {
                                        !props.UserData.valid?
                                        <div className="detail-page-valid-button-group">
                                            <div className="detail-page-nonvalid-button" onClick={() => props.troggleConfirmModel()}>
                                                <Icon type="stop" /> 不通過審批
                                            </div>
                                            <div className="detail-page-valid-button" onClick={() => props.vaildDriver()}>
                                                <Icon type="check" /> 通過審批
                                            </div>
                                        </div>:
                                        props.UserData.ban?
                                        <div className="detail-page-release-button" onClick={() => props.unbanUser(props.UserData._id)}>
                                            <Icon type="check" /> 解除
                                        </div>:
                                        <div className="detail-page-ban-button" onClick={() => props.banUser(props.UserData._id)}>
                                            <Icon type="stop" /> 禁止
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>:
                        <div className="detail-page-main-empty">
                            <Icon type="loading" />
                        </div>
                    }
                </div>
                <div className="detail-page-title-middle-row">
                    <div className="detail-page-title">
                        訂單紀錄
                    </div>
                </div>
                {
                    !props.UserOrder?
                    <div className="detail-page-order-comntainer-empty">
                        <Icon type="loading" />
                    </div>:
                    props.UserOrder.length == 0?
                    <div className="detail-page-order-comntainer-empty">
                        此用戶暫時未有訂單
                    </div>:
                    <div className="detail-page-order-comntainer">
                        {
                            props.UserOrder.map((item, index) => (
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
                    </div>
                }
                <div className="detail-page-title-middle-row">
                    <div className="detail-page-title">
                        評價紀錄
                    </div>
                </div>
                {
                    !props.UserComment?
                    <div className="detail-page-order-comntainer-empty">
                        <Icon type="loading" />
                    </div>:
                    props.UserComment.length == 0?
                    <div className="detail-page-order-comntainer-empty">
                        此用戶暫時未有評價
                    </div>:
                    <div className="detail-page-order-comntainer">
                        {
                            props.UserComment.map(( item, index ) => (
                                <Item
                                    type="Comment"
                                    key={index}
                                    orderId={item.orderId}
                                    comment={item.comment}
                                    commentBy={item.orderBy}
                                    clickable={true}
                                />
                            ))
                        }
                    </div>
                }
            </DetailPage>
            <Modal
                title="審批確定"
                visible={ props.visible }
                onOk={ () => props.delteDriverAccount() }
                onCancel={ () => props.troggleConfirmModel() }
                >
                <p>是否不通過此司機的審批?</p>
            </Modal>
        </div>
    )
};

const ImageViewer =styled.div`

`


const DetailPage = styled.div`
    position: absolute;
    top: 8.5vh;
    background-color: #F1F1F1;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: scroll;

    &> .detail-page-main-row{
        margin: 2.5vh;
        height: 50vh;
        background-color: #FFF;
        box-shadow: 0 1px 3px rgba(0,0,0,.55);

        &> .detail-page-main-empty{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 6vh;
        }

        &> .detail-page-main{
            padding: 2vh;
            width: 100%;
            height: 100%;

            &> .detail-page-class-selector{
                display: flex;
                justify-content: flex-end;
            }

            &> .detail-page-data-item{
                display: flex;
                font-size: 2.5vh;
                padding-bottom: 0.8vh;
                align-items: center
                
                &> .detail-page-data-title{
                    margin-right: 2vw;
                    color: black;
                }

                &> .detail-page-data{
                    color: gray;
                    display: flex;
                    align-items: center;

                    &> span{
                        &> .ant-badge-status-dot{
                            width: 1vh;
                            height: 1vh;
                        }
        
                        &> .ant-badge-status-text{
                            font-size: 2.5vh;
                            margin-left: 1.3vh;
                        }
                    }

                    &> .detail-page-data-image{
                        padding: 1vh 1.5vh 1vh 1vh;
                        font-size: 2.5vh;
                        border: 1px solid darkgray;
                        color: darkgray;
                        margin: 2vh;
                    }
                }

                &> .detail-page-button-wrapper{
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;

                    &> .detail-page-valid-button-group{
                        display: flex;
                        justify-content: space-between;
                        width: 100%;

                        &> .detail-page-nonvalid-button{
                            padding: 1vh 1.5vh 1vh 1vh;
                            font-size: 2.5vh;
                            border: 1px solid crimson;
                            color: crimson;
                        }

                        &> .detail-page-valid-button{
                            padding: 1vh 1.5vh 1vh 1vh;
                            font-size: 2.5vh;
                            border: 1px solid seagreen;
                            color: seagreen;
                        }
                    }

                    &> .detail-page-ban-button{
                        padding: 1vh 1.5vh 1vh 1vh;
                        font-size: 2.5vh;
                        border: 1px solid crimson;
                        color: crimson;
                    }

                    &> .detail-page-release-button{
                        padding: 1vh 1.5vh 1vh 1vh;
                        font-size: 2.5vh;
                        border: 1px solid seagreen;
                        color: seagreen;
                    }
                }
            }
        }
    }

    &> .detail-page-title-row{
        padding: 2.5vh 2.5vh 0 2.5vh;
        display: flex;
        align-items: center;

        &> .detail-page-title{
            font-size: 3.5vh;
        }
    }

    &> .detail-page-readmore{
        margin: 2.5vh;
        display: flex;
        justify-content: flex-end;
    }

    &> .detail-page-title-middle-row{
        padding:0 2.5vh;
        display: flex;
        align-items: center;

        &> .detail-page-title{
            font-size: 3.5vh;
        }
    }

    &> .detail-page-order-comntainer-empty{
        height: 65vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3vh;
    }

    &> .detail-page-order-comntainer{
        height: 65vh;
        overflow: scroll;
    }

`