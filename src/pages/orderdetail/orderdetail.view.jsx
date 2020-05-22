import React            from 'react';
import styled           from 'styled-components';

import Header           from '../../components/header/header';
import Item             from '../../components/item/item';

import { Icon , Badge }         from 'antd';

export default( props ) => {
    console.log("======orderDetail==========");
    console.log(props);
    return (
        <div style={{width: '100%', height:'100%'}}>
            <Header/>
            <DetailPage>
                <div className="detail-page-title-row">
                    <div className="detail-page-title" onClick={() => console.log(props)}>
                        訂單資料 
                    </div>
                </div>
                <div className="detail-page-main-row">
                    {
                        props.loading?
                        <div className="detail-page-main-loading">
                            <Icon type="loading" />
                        </div>:
                        <div className="detail-page-main">
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    訂單編號:
                                </div>
                                <div className="detail-page-data">
                                    { props.id }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    起始點:
                                </div>
                                <div className="detail-page-data">
                                    { props.start }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    目的地:
                                </div>
                                <div className="detail-page-data">
                                    { props.end }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    隧道:
                                </div>
                                <div className="detail-page-data">
                                    { props.detail.tunnel }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    折扣:
                                </div>
                                <div className="detail-page-data">
                                    { 
                                        props.detail.discount == 100?
                                        "千足金":
                                        props.detail.discount == 90?
                                        "9折":"85折"
                                    }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    狀態:
                                </div>
                                <div className="detail-page-data">
                                    {
                                        props.status == "new"?
                                        <Badge status="success" text="等待中"/>:
                                        props.status == "accepted"?
                                        <Badge status="warning" text="承接中"/>:
                                        props.status == "canceled"?
                                        <Badge status="error" text="已取消" />:
                                        props.status == "commented"?
                                        <Badge status="processing" text="已完成" />:
                                        <Badge status="default" text="已丟棄" />
                                    }
                                </div>
                            </div>
                            <div className="detail-page-data-footer-wrapper">
                                <div className="detail-page-data-footer-item">
                                    <div className="detail-page-data-footer-item-icon">
                                        <Icon type="dollar" />
                                    </div>
                                    <div className="detail-page-data-footer-item-data">
                                        { props.detail.cost }
                                    </div>
                                </div>
                                <div className="detail-page-data-footer-item" style={{marginRight:'2vh'}}>
                                    <div className="detail-page-data-footer-item-icon">
                                        <Icon type="compass" />
                                    </div>
                                    <div className="detail-page-data-footer-item-data">
                                        { props.distance }km
                                    </div>
                                </div>
                                <div className="detail-page-data-footer-item">
                                    <div className="detail-page-data-footer-item-icon" style={{ color: props.detail.taxiType == "red"? 'red':'green' }}>
                                        <Icon type="car" theme="filled" />
                                    </div>
                                    <div className="detail-page-data-footer-item-data">
                                        { props.detail.taxiType == "red"? "紅的":"綠的" }
                                        ({ props.detail.passenger }座)
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="detail-page-title-middle-row">
                    <div className="detail-page-title">
                        用家
                    </div>
                </div>
                {
                    props.loading?
                        <div className="detail-page-item-loading">
                            <Icon type="loading" />
                        </div>:
                    !props.user?
                        <div className="detail-page-item-loading">
                            User has been deleted
                        </div>:
                    props.user.type == "driver"?
                        <Item
                            type="Driver"
                            drivername={ props.user.username }
                            telephoneNo={ props.user.telephone_no}
                            driverId={ props.user._id }
                            grade={ props.user.grade }
                            valid={ props.user.valid }
                            online={ null }
                        />:
                        <Item 
                            type="User"
                            username={ props.user.username }
                            email={ props.user.email }
                            userId={ props.user._id }
                            valid={ props.user.valid }
                            online={ null }
                        />
                }
                <div className="detail-page-title-middle-row">
                    <div className="detail-page-title">
                        司機
                    </div>
                </div>
                {
                    props.loading?
                        <div className="detail-page-item-loading">
                            <Icon type="loading" />
                        </div>:
                    props.driver?
                        <Item
                            type="Driver"
                            drivername={ props.driver.username }
                            telephoneNo={ props.driver.telephone_no}
                            driverId={ props.driver._id }
                            grade={ props.driver.grade }
                            valid={ props.driver.valid }
                            online={ null }
                        />:
                        <div className="detail-page-item-empty">
                            尚未有司機承接此訂單
                        </div>
                }
                <div className="detail-page-title-middle-row">
                    <div className="detail-page-title">
                        評價
                    </div>
                </div>
                {
                    props.loading?
                        <div className="detail-page-item-loading-large">
                            <Icon type="loading" />
                        </div>:
                    Object.keys(props.comment).length !== 0?
                        <Item
                            type="Comment"
                            orderId={props.orderId}
                            comment={props.comment}
                            commentBy={props.user.username}
                            clickable={false}
                        />:
                        <div className="detail-page-item-empty-large">
                            尚未有評價
                        </div>
                }
            </DetailPage>
        </div>
    )
};


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
        height: auto;
        background-color: #FFF;
        box-shadow: 0 1px 3px rgba(0,0,0,.55);

        &> .detail-page-main-loading{
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

            &> .detail-page-data-item{
                display: flex;
                font-size: 2.5vh;
                padding-bottom: 0.8vh;
                
                &> .detail-page-data-title{
                    margin-right: 2vw;
                    color: black;
                    white-space: nowrap;
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
                }
            }

            &> .detail-page-data-footer-wrapper{
                display: flex;
                height: 9vh;

                &> .detail-page-data-footer-item{
                    width: 33.3%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 4vh;

                    &> .detail-page-data-footer-item-data{
                        font-size: 2.4vh;
                        padding-bottom: 0.1vh;
                        white-space: nowrap;
                    }

                    &> .detail-page-data-footer-item-icon{
                        margin-right: 1vh;
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

    &> .detail-page-item-loading{
        margin: 2.5vh;
        height: 13vh;
        background-color: #FFF;
        box-shadow: 0 1px 3px rgba(0,0,0,.55);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 6vh;
    }

    &> .detail-page-item-loading-large{
        margin: 2.5vh;
        height: 26vh;
        background-color: #FFF;
        box-shadow: 0 1px 3px rgba(0,0,0,.55);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 6vh;
    }

    &> .detail-page-item-empty{
        margin: 2.5vh;
        height: 13vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5vh;
    }

    &> .detail-page-item-empty-large{
        margin: 2.5vh;
        height: 26vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5vh;
    }
`