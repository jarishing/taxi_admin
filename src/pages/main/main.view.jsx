import React            from 'react';
import styled           from 'styled-components';

import Header           from '../../components/header/header';

import { Icon }         from 'antd';

export default( props ) => {
    return (
        <div style={{width: '100%', height:'100%'}}>
            <Header/>
            <MainPage>
                <div className="main-page-item-wrapper">
                    <div className="main-page-item" onClick={ () => props.onActiveUserClick()}>
                        <div className="main-page-item-icon-wrapper">
                            <div className="main-page-item-icon" style={{backgroundColor: '#468189'}}>
                                <Icon type="user" />
                            </div>
                        </div>
                        <div className="main-page-item-data-wrapper">
                            <div className="main-page-item-data">
                                {props.activeUser? props.activeUser: props.activeUser == 0? props.activeUser:"-"}
                            </div>
                            <div className="main-page-item-data-title">
                                在線用戶
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-page-item-wrapper">
                    <div className="main-page-item" onClick={ () => props.onActiveDriverClick()}>
                        <div className="main-page-item-icon-wrapper">
                            <div className="main-page-item-icon" style={{backgroundColor: '#F28123'}}>
                                <Icon type="car" />
                            </div>
                        </div>
                        <div className="main-page-item-data-wrapper">
                            <div className="main-page-item-data">
                                {props.activeDriver? props.activeDriver: props.activeDriver == 0? props.activeDriver:"-"}
                            </div>
                            <div className="main-page-item-data-title">
                                在線司機
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-page-item-wrapper">
                    <div className="main-page-item" onClick={ () => props.onOrderingClick()}>
                        <div className="main-page-item-icon-wrapper">
                            <div className="main-page-item-icon" style={{backgroundColor: '#D34E24'}}>
                                <Icon type="solution" />
                            </div>
                        </div>
                        <div className="main-page-item-data-wrapper">
                            <div className="main-page-item-data">
                                {props.ordering? props.ordering: props.ordering == 0? props.ordering:"-"}
                            </div>
                            <div className="main-page-item-data-title">
                                現存訂單
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-page-item-wrapper">
                    <div className="main-page-data-column">
                        <div className="main-page-data-column-row">
                            <div className="main-page-data-item-wrapper">
                                <div className="main-page-data-item">
                                    <div className="main-page-data-item-data" style={{color: '#1B5299'}}>
                                        { props.mostPopularStart? props.mostPopularStart:"-"}
                                    </div>
                                    <div className="main-page-data-item-title">
                                        最受歡迎上車點
                                    </div>
                                </div>
                            </div>
                            <div className="main-page-data-item-wrapper">
                                <div className="main-page-data-item">
                                    <div className="main-page-data-item-data" style={{color: '#D81E5B'}}>
                                        { props.mostPopularEnd? props.mostPopularEnd:"-"}
                                    </div>
                                    <div className="main-page-data-item-title">
                                        最受歡迎目的地
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-page-data-column-row">
                            <div className="main-page-data-item-wrapper">
                                <div className="main-page-data-item">
                                    <div className="main-page-data-item-data" style={{color: '#38686A'}}>
                                        {props.averageDistance? props.averageDistance:"-"}公里
                                    </div>
                                    <div className="main-page-data-item-title">
                                        訂單平均距離
                                    </div>
                                </div>
                            </div>
                            <div className="main-page-data-item-wrapper">
                                <div className="main-page-data-item">
                                    <div className="main-page-data-item-data" style={{color: '#0B3954'}}>
                                        {props.mostPopulatTime? props.mostPopulatTime: props.mostPopulatTime == 0? props.mostPopulatTime:"-"}時
                                    </div>
                                    <div className="main-page-data-item-title">
                                        最受歡迎的落訂時間
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainPage>
        </div>
    )
};

const MainPage = styled.div`
    position: absolute;
    top: 8.5vh;
    background-color: #F1F1F1;
    bottom: 0;
    left: 0;
    right: 0;

    &> .main-page-item-wrapper{
        padding: 2.5vh 2.5vh 0 2.5vh;

        &> .main-page-item{
            height: 11vh;
            display: flex;
            background-color: #FFF;
            box-shadow: 0 1px 3px rgba(0,0,0,.55);

            &> .main-page-item-icon-wrapper{
                padding: 1.5vh;
                height: 11vh;
                width: 11vh;

                &> .main-page-item-icon{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #FFF;

                    &> i{
                        font-size: 5vh;
                    }
                }
            }

            &> .main-page-item-data-wrapper{
                margin: 1.5vh;
                width: max-content;

                &> .main-page-item-data{
                    font-size: 3vh;
                }

                &> .main-page-item-data-title{
                    font-size: 2.5vh;
                }
            }
        }


        &> .main-page-data-column{
            height: 36vh;
            padding: 2vh;
            background-color: #FFF;
            box-shadow: 0 1px 3px rgba(0,0,0,.55);

            &> .main-page-data-column-row{
                height: 16vh;
                width: 100%;
                display: flex;

                &> .main-page-data-item-wrapper{
                    width: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &> .main-page-data-item{
                        width: 100%;

                        &> .main-page-data-item-data{
                            display: flex;
                            justify-content: center;
                            padding-bottom: 0.5vh;
                            font-size: 3.5vh;
                        }

                        &> .main-page-data-item-title{
                            display: flex;
                            justify-content: center;
                            font-size: 2.3vh;
                        }
                    }
                }

                &> .main-page-data-item-wrapper:nth-child(1){
                    border-right: 1px solid darkgray;
                }
            }

            &> .main-page-data-column-row:nth-child(1){
                border-bottom: 1px solid darkgray;
            }
        }
    }
`