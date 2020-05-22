import React            from 'react';
import styled           from 'styled-components';

import { Badge, Icon, Rate } from 'antd';

export default( props ) => {
    console.log("=============item=============");
    console.log(props);
    switch(props.type){
        case 'User':
            return(
                <Item onClick={() => props.onUserItemClick( props.userId )}>
                    <div className="item-body">
                        <div className="item-body-data">
                            <div className="item-body-data-username">
                                { props.username }
                            </div>
                            <div className="item-body-data-email">
                                { props.data? props.data.email:null }
                            </div>
                        </div>
                        <div className="item-body-status">
                            {
                                props.ban?
                                <Badge status="error" text="禁止中" />:
                                props.online?
                                <Badge status="success" text="在線中" />:
                                <Badge status="processing" text="正常" />
                            }
                        </div>
                    </div>
                </Item>
            )
        case 'Driver':
            return(
                <Item onClick={() => props.onDriverItemClick( props.driverId )}>
                    <div className="item-body">
                        <div className="item-body-data">
                            <div className="item-body-data-username">
                                { props.drivername }
                            </div>
                            <div className="item-body-data-email">
                                { props.telephoneNo }
                            </div>
                        </div>
                        <div className="item-body-status">
                            <div className="item-body-driver-status">
                                <div className="item-body-driver-grade-wrapper">
                                    <div className="item-driver-grade-title">
                                        評級:
                                    </div>
                                    <div className="item-driver-grade-display">
                                        { props.grade }
                                </div>
                                </div>
                                <div className="item-body-driver-status-wrapper">
                                    {
                                        props.ban?
                                            <Badge status="error" text="禁止中" />:
                                        !props.valid?
                                            <Badge status="error" text="審批中" />:
                                        props.online?
                                            <Badge status="success" text="在線中" />:
                                            <Badge status="processing" text="正常" />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Item>
            )
        case 'Order':
            return(
                <ItemLarge onClick={() => props.onOrderItemClick( props.orderId )}>
                    <div className="item-body">
                        <div className="item-body-id">
                            訂單編號: {props.orderShowingId}
                        </div>
                        <div className="item-body-main-wrapper">
                            <div className="item-body-main-list">
                                <div className="item-body-main-side">
                                    <Icon type="environment" />
                                </div>
                                <div className="item-body-main-start">
                                    { props.start }
                                </div>
                            </div>
                            <div className="item-body-main-list">
                                <div className="item-body-main-side">
                                    <Icon type="flag" />
                                </div>
                                <div className="item-body-main-end">
                                    { props.end }
                                </div>
                            </div>
                        </div>
                        <div className="item-body-footer-wrapper">
                            <div className="item-body-footer-item">
                                <div className="item-body-footer-item-icon">
                                    <Icon type="dollar" />
                                </div>
                                <div className="item-body-footer-item-data">
                                    { props.cost}
                                </div>
                            </div>
                            <div className="item-body-footer-item">
                                <div className="item-body-footer-item-icon" style={{ color: props.taxiType == "red"? 'red':'green' }}>
                                    <Icon type="car" theme="filled" />
                                </div>
                                <div className="item-body-footer-item-data">
                                    { props.taxiType == "red"? "紅的":"綠的" }
                                    ({ props.passenger } 座)
                                </div>
                            </div>
                            <div className="item-body-footer-item">
                                {
                                    props.status == "new"?
                                    <Badge status="success" text="等待中"/>:
                                    props.status == "accepted"?
                                    <Badge status="warning" text="承接中"/>:
                                    props.status == "canceled"?
                                    <Badge status="error" text="已取消" />:
                                    props.status == "confirmed"?
                                    <Badge status="processing" text="已完成" />:
                                    props.status == "commented"?
                                    <Badge status="processing" text="已評價" />:
                                    <Badge status="default" text="已丟棄" />
                                }
                            </div>
                        </div>
                    </div>
                </ItemLarge>
            )
        case 'Comment':
            return(
                <ItemLarge onClick={() => props.clickable? props.onOrderItemClick( props.orderId ):null }>
                    <div className="item-body">
                        <div className="item-body-comment-main-wrapper">
                            "{props.comment.comment}"
                        </div>
                        <div className="item-body-comment-footer-wrapper">
                            <div className="item-body-comment-footer-by">
                                By {props.commentBy}
                            </div>
                            <div className="item-body-comment-footer-star">
                                <Rate disabled defaultValue={props.comment.star} />
                            </div>
                        </div>
                    </div>
                </ItemLarge>
            )
        default :
            console.log('UNHANDLE TYPE');
            return <div>error</div>;
    }
};

const ItemLarge = styled.div`
    margin: 2.5vh;
    height: 26vh;
    background-color: #FFF;
    box-shadow: 0 1px 3px rgba(0,0,0,.55);

    &> .item-body{
        padding: 2vh;
        width: 100%;
        height: 100%;

        &> .item-body-id{
            font-size: 2.5vh;
            padding-bottom: 1vh;
        }

        &> .item-body-comment-main-wrapper{
            padding-bottom: 2vh;
            height: 78%;
            overflow: -webkit-paged-y;
            font-size: 2.5vh;
        }

        &> .item-body-comment-footer-wrapper{
            display: flex;
            align-items: center;
            justify-content: space-between;

            &> .item-body-comment-footer-by{
                padding-top: 0.5vh;
                font-size: 2.5vh;
            }

            &> .item-body-comment-footer-star{
                &> .ant-rate{
                    font-size: 2.4vh;
                }
            }
        }

        &> .item-body-main-wrapper{
            padding-bottom: 2vh;
            height: 60%;

            &> .item-body-main-list{
                height: 50%;
                display: flex;
                align-items: center;

                &> .item-body-main-side{
                    width: 16%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 4vh;
                }

                &> .item-body-main-start{
                    height: 100%;
                    width: 80%;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid darkgray;
                    overflow: hidden;
                    white-space: nowrap;
                    font-size: 2.4vh;
                }

                &> .item-body-main-end{
                    height: 100%;
                    width: 80%;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    white-space: nowrap;
                    font-size: 2.4vh;
                }
            }
        }

        &> .item-body-footer-wrapper{
            display: flex;
            height: 22%;

            &> .item-body-footer-item{
                width: 33.3%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 3vh;

                &> .item-body-footer-item-data{
                    font-size: 2.4vh;
                    padding-bottom: 0.1vh;
                }

                &> .item-body-footer-item-icon{
                    margin-right: 1vh;
                }

                &> span{
                    &> .ant-badge-status-dot{
                        width: 1.5vh;
                        height: 1.5vh;
                    }
    
                    &> .ant-badge-status-text{
                        font-size: 2.5vh;
                        margin-left: 1.3vh;
                    }
                }
            }
        }
    }
`

const Item = styled.div`
    margin: 2.5vh;
    height: 13vh;
    background-color: #FFF;
    box-shadow: 0 1px 3px rgba(0,0,0,.55);

    &> .item-body{
        padding: 2vh;
        width: 100%;
        height: 100%;
        display: flex;

        &> .item-body-data{
            height: 100%;
            width: 70%;

            &> .item-body-data-username{
                font-size: 3.5vh;
                padding-bottom: 0.5vh;
                overflow: hidden;
                white-space:nowrap;
            }

            &> .item-body-data-email{
                font-size: 2.5vh;
                color: darkgray;
                overflow: hidden;
                white-space:nowrap;
            }
        }

        &> .item-body-status{
            width: 30%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            &> span{
                &> .ant-badge-status-dot{
                    width: 1.5vh;
                    height: 1.5vh;
                }

                &> .ant-badge-status-text{
                    font-size: 2.5vh;
                    margin-left: 1.3vh;
                }
            }


            &> .item-body-driver-status{
                &> .item-body-driver-grade-wrapper{
                    display: flex;
                    justify-content: center;
                    align-items: center;;
                    margin: 1vh;
                    font-size: 2.5vh

                    &> .item-driver-grade-title{
                        margin: 0 1vh;
                    }
                }
                &> .item-body-driver-status-wrapper{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &> span{
                        &> .ant-badge-status-dot{
                            width: 1.5vh;
                            height: 1.5vh;
                        }
        
                        &> .ant-badge-status-text{
                            font-size: 2.5vh;
                            margin-left: 1.3vh;
                        }
                    }
                }
            }
        }

    }
`