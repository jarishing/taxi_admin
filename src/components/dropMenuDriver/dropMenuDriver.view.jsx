import React            from 'react';
import styled           from 'styled-components';

import { Radio, Icon }           from 'antd';
import options from './constant/dropMenu.options';
import show from './constant/dropMenu.show';

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
                    {
                        options[props.type].map( (item,index) => (
                            <div 
                                key={index}
                                className={props.value == item.value?"menu-selector menu-selector-selected":"menu-selector"}
                                onClick={() => props.onChange(item.value)}
                            >{item.label}</div>
                        ))
                    }
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
            { show[props.type][props.value] }
            <Icon type="caret-down" />
        </Menu>
    )
};

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
        z-index: 510;
        background-color: white;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);

        &> .menu-selector{
            max-height: 70vh;
            overflow-y: scroll;

           &> .menu-selector{
               border-bottom: 1px solid gray;
               height: 10vh;
               width: 100%;
               display: flex;
               justify-content: center;
               align-items: center;
               font-size: 5vh;
           }

           &> .menu-selector-selected{
               background-color: #158FD8;
               color: #FFF;
           }
            
        }

        &> .menu-function{
            height: 10vh;
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