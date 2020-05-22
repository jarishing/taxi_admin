import React            from 'react';
import styled           from 'styled-components';

import Header           from '../../components/header/header';
import DropMenu         from '../../components/dropMenu/dropmenu';
import Pie              from '../../components/chart/chart.pie/pie';

import TimeRange        from 'react-time-range';
import moment           from 'moment';


export default( props ) => {
    console.log(props);
    return (
        <div style={{width: '100%', height:'100%'}}>
            <Header/>
            <MainPage>
                {
                   props.loading? 
                   <div className="pie-loading">
                        loading...
                    </div>:
                   <div className="pie-main">
                        <div 
                            className="pie-timepicker">
                            <DropMenu
                                padding={"1vh 2vh"}
                                width={"50vw"}
                                fontSize={"2.5vh"}
                                onChange={ props.onChange }
                                onCancel={ props.onCancel }
                                onSubmit={ props.getData }
                                value={ props.filterTime }
                            />
                        </div>
                        {
                            !props.startData.startData && !props.startData.startLabel?
                            <Empty> No Data </Empty>:
                            props.startData.startData.length == 0 && props.startData.startLabel.length == 0?
                            <Empty> No Data </Empty>:
                            <Pie 
                                title="最受歡迎起始點"
                                pieData={props.startData.startData} 
                                pieLabel={props.startData.startLabel}
                            />
                        }
                        {
                            !props.endData.endData&&!props.endData.endLabel?
                            <Empty> No Data </Empty>:
                            props.endData.endData.length == 0 && props.endData.endLabel.length == 0?
                            <Empty> No Data </Empty>:
                            <Pie 
                                title="最受歡迎目的地"
                                pieData={props.endData.endData} 
                                pieLabel={props.endData.endLabel}
                            />
                        }
                        {
                            !props.discountData.discountData&& !props.discountData.discountLabel?
                            <Empty> No Data </Empty>:
                            props.discountData.discountData.length == 0 && props.discountData.discountLabel.length == 0?
                            <Empty> No Data </Empty>:
                            <Pie 
                                title="乘客折扣"
                                pieData={props.discountData.discountData} 
                                pieLabel={props.discountData.discountLabel}
                            />
                        }
                        {
                            props.filter?
                            null:
                            !props.timerange.timeData&&!props.timerange.timeLabel?
                            <Empty> No Data </Empty>:
                            props.timerange.timeData.length == 0 && props.timerange.timeLabel.length == 0?
                            <Empty> No Data </Empty>:
                            <Pie 
                                title="最受歡迎訂單時間"
                                pieData={props.timerange.timeData} 
                                pieLabel={props.timerange.timeLabel}
                            />
                        }
                    </div>
                }
            </MainPage>
        </div>
    )
};

// <Pie 
//                             title="最受歡迎目的地"
//                             pieData={props.endData.endData} 
//                             pieLabel={props.endData.endLabel}
//                         />
                        // <Pie 
                        //     title="乘客折扣"
                        //     pieData={props.discountData.discountData} 
                        //     pieLabel={props.discountData.discountLabel}
                        // />
                        // <Pie 
                        //     title="最受歡迎訂單時間"
                        //     pieData={props.timerange.timeData} 
                        //     pieLabel={props.timerange.timeLabel}
                        // />


const Empty = styled.div`
    margin: 2.5vh;
    height: 36vh;
    background-color: #FFF;
    box-shadow: 0 1px 3px rgba(0,0,0,.55);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
`

const MainPage = styled.div`
    position: absolute;
    top: 8.5vh;
    background-color: #F1F1F1;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: scroll;

    &> .pie-main{
        &> .pie-timepicker{
            display: flex;
            padding: 2vh 2vh 0;
            justify-content: flex-end;

            &> #react-time-range{
                font-size: 2vh;
            }
        }
    }
`