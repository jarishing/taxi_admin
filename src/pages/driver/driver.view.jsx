import React            from 'react';
import styled           from 'styled-components';

import Header           from '../../components/header/header';
import Item             from '../../components/item/item';
import DropMenu         from '../../components/dropMenuDriver/dropMenuDriver';
// import { Icon, Select }         from 'antd';
// const Option = Select.Option;

export default( props ) => {
   
    const driverList = props.driverList;

    return (
        <div style={{width: '100%', height:'100%'}}>
            <Header/>
            <UserPage>
                <div className="user-page-title-row">
                    <div className="user-page-title">
                        司機列表
                    </div>
                    <DropMenu
                        padding={"1vh 2vh"}
                        width={"50vw"}
                        fontSize={"2.5vh"}
                        type={'DRIVER'}
                        onChange={ props.setListType }
                        onCancel={ props.onCancel }
                        onSubmit={ props.getDriverList }
                        value={ props.searchtype }
                    />
                </div>
                <div className="user-page-main">
                {
                    driverList?
                    <div>
                        {
                            driverList.map( ( item, index ) => (
                                <Item
                                    type="Driver"
                                    key={ index }
                                    drivername={ item.username }
                                    telephoneNo={ item.telephone_no}
                                    driverId={ item._id }
                                    grade={ item.grade }
                                    valid={ item.valid }
                                    ban={ item.ban }
                                    online={ props.listType == "active"? true:null }
                                />
                            ))
                        }
                    </div>:
                    <div className="user-page-main-empty">
                        暫時未有用戶
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