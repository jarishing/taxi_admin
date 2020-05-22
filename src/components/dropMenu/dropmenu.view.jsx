import React            from 'react';
import styled           from 'styled-components';

import { Radio, Icon }           from 'antd';

const RadioGroup = Radio.Group;

export default( props ) => {

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };
      
    return(
        props.open?
        <OpenMenu>
            <div className="menu-background" onClick={ () => props.onCancel() }/>
            <div className="menu-wrapper">
                <div className="menu-selector">
                    <RadioGroup  onChange={props.onChange} value={props.value}>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={"now"}>現時訂單</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={"all"}>所有已完成訂單</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={0}>00:00 ~ 01:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={1}>01:00 ~ 02:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={2}>02:00 ~ 03:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={3}>03:00 ~ 04:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={4}>04:00 ~ 05:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={5}>05:00 ~ 06:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={6}>06:00 ~ 07:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={7}>07:00 ~ 08:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={8}>08:00 ~ 09:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={9}>09:00 ~ 10:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={10}>10:00 ~ 11:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={11}>11:00 ~ 12:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={12}>12:00 ~ 13:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={13}>13:00 ~ 14:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={14}>14:00 ~ 15:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={15}>15:00 ~ 16:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={16}>16:00 ~ 17:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={17}>17:00 ~ 18:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={18}>18:00 ~ 19:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={19}>19:00 ~ 20:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={20}>20:00 ~ 21:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={21}>21:00 ~ 22:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={22}>22:00 ~ 23:00</Radio>
                        </div>
                        <div className="menu-selector-item">
                            <Radio style={radioStyle} value={23}>23:00 ~ 00:00</Radio>
                        </div>
                    </RadioGroup>
                </div>
                <div className="menu-function">
                    <div className="menu-cancel" onClick={ () => props.onCancel() }>
                        cancel
                    </div>
                    <Divider/>
                    <div className="menu-confirm" onClick={ () => props.onConfirm() }>
                        confirm
                    </div>
                </div>
            </div>
        </OpenMenu>
        :<Menu 
            style={{
                padding: props.padding? props.padding:'20px',
                width: props.width? props.width:'100px',
                fontSize: props.fontSize? props.fontSize:'20px'
            }}
            onClick={ () => props.troggleMenu() }
        >
            {
                props.value == 0? "00:00 ~ 01:00":
                props.value == 1? "01:00 ~ 02:00":
                props.value == 2? "02:00 ~ 03:00":
                props.value == 3? "03:00 ~ 04:00":
                props.value == 4? "04:00 ~ 05:00":
                props.value == 5? "05:00 ~ 06:00":
                props.value == 6? "06:00 ~ 07:00":
                props.value == 7? "07:00 ~ 08:00":
                props.value == 8? "08:00 ~ 09:00":
                props.value == 9? "09:00 ~ 10:00":
                props.value == 10? "10:00 ~ 11:00":
                props.value == 11? "11:00 ~ 12:00":
                props.value == 12? "12:00 ~ 13:00":
                props.value == 13? "13:00 ~ 14:00":
                props.value == 14? "14:00 ~ 15:00":
                props.value == 15? "15:00 ~ 16:00":
                props.value == 16? "16:00 ~ 17:00":
                props.value == 17? "17:00 ~ 18:00":
                props.value == 18? "18:00 ~ 19:00":
                props.value == 19? "19:00 ~ 20:00":
                props.value == 20? "20:00 ~ 21:00":
                props.value == 21? "21:00 ~ 22:00":
                props.value == 22? "22:00 ~ 23:00":
                props.value == 23? "23:00 ~ 00:00":
                props.value == "now"? "現時訂單":
                "所有已完成訂單"
            }
            <Icon type="caret-down" />
        </Menu>
    )
};

// <div className="menu-selector-item">
//                         <Radio>00:00 ~ 01:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio >01:00 ~ 02:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>02:00 ~ 03:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>03:00 ~ 04:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>04:00 ~ 05:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>05:00 ~ 06:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>06:00 ~ 07:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>07:00 ~ 08:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>08:00 ~ 09:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>09:00 ~ 10:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>10:00 ~ 11:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>11:00 ~ 12:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>12:00 ~ 13:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>13:00 ~ 14:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>14:00 ~ 15:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>15:00 ~ 16:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>16:00 ~ 17:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>17:00 ~ 18:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>18:00 ~ 19:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>19:00 ~ 20:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>20:00 ~ 21:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>21:00 ~ 22:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>22:00 ~ 23:00</Radio>
//                     </div>
//                     <div className="menu-selector-item">
//                         <Radio>23:00 ~ 00:00</Radio>
//                     </div>

const Divider = styled.div`
    border-left: 1px solid darkgray;
    height: 70%;
`

const OpenMenu = styled.div`
    display: flex;
    justify-content: center;

    &> .menu-background{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 500;
        background-color: #000;
        opacity: 0.2;
    }

    &> .menu-wrapper{
        position: fixed;
        top: 10vh;
        left: 10vw;
        right: 10vw;
        bottom: 10vh;
        z-index: 510;
        background-color: white;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);

        &> .menu-selector{
            height: 90%;
            overflow-y: scroll;

            &> .ant-radio-group{
                width: 100%;
                height: auto;

                &> .menu-selector-item{
                    height: 8vh;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-bottom: 1px solid lightgray;
    
                    &> .ant-radio-wrapper{
                        font-size: 2.5vh;
    
                        &> .ant-radio{
                            &> .ant-radio-inner{
                                width: 3vh;
                                height: 3vh;
                                border-radius: 50%;
                            }
    
                            &> .ant-radio-inner:after{                          
                                width: 2vh;
                                height: 2vh;
                                left: 0.4vh;
                                top: 0.4vh;
                                border-radius: 50%;
                            }
                        }
                    }
                }
            }
        }

        &> .menu-function{
            height: 10%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &> .menu-cancel{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 3vh;
                color: #158FD8;
            }

            &> .menu-confirm{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 3vh;
                color: #158FD8;
            }
        }
    }
`

const Menu = styled.div`
    background-color: white;
    border: 1px solid gray;
    border-radius: 10px;  
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`