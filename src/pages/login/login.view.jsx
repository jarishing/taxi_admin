import React            from 'react';
import styled           from 'styled-components';

import background       from './assets/loginBackground.jpg';

const errorMessage = "*帳戶名稱或密碼不正確";

export default( props ) => {
    return (
        <LoginPage>
            <div className="login-card">
                <h1 className="login-title" onClick={ () => console.log(props)}>登入帳號</h1>
                <span>請輸入用戶名稱及密碼</span>
                <form
                    onSubmit={ event =>{
                        event.preventDefault();
                        return props.Login( props.query.username, props.query.password )
                    }}
                    >
                    <div className="login-item">
                        <input
                            placeholder="您的帳戶名稱"
                            onChange={ event => props.onUsername( event.target.value )}
                        />
                    </div>
                    <div className="login-item">
                        <input
                            placeholder="您的密碼"
                            type="password"
                            onChange={ event => props.onPassword( event.target.value )}
                        />
                    </div>
                    <div className="login-item">
                        <button>登入</button>
                    </div>
                </form>
                <div className="login-error">
                    {props.query.loginVaild? null:errorMessage }
                </div>
            </div>
        </LoginPage>
    )
};

const LoginPage = styled.div`
    background     : url(${background}) no-repeat center center fixed;
    background-size:     cover;
    position: fixed; 
    top: 0; 
    left: 0; 
    min-width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;

    &> .login-card{
        width: 70%;
        height: fit-content;
        background-color: #fff;
        margin: 0 auto;
        top: 20%;
        left: 0;
        right: 0;
        padding: 30px 36px;
        box-shadow: 0 2px 3px rgba(0,0,0,.55);

        &> .login-error{
            font-size: 2vh;
            height: 2vh;
            color: crimson;
        }

        &> span{
            margin-bottom: 10px;
        }

        &> form{
            &> .login-item{
                margin: 3vh 0;
    
                &> input{
                    width: -webkit-fill-available;
                    height: 6vh;
                    padding: 1px 10px;
                    font-size: 2vh;
                    border: 1px solid lightgray;
                    border-radius: 3px;
                }
    
                &> button{
                    width: -webkit-fill-available;
                    height: 7vh;
                    background-color: #4194EB;
                    font-size: 2vh;
                    color: #FFF;
                    border: 0;
                    border-radius: 3px;
                    display: flex;
                    align-item: center;
                    justify-content: center;
                }
            }
        }
    }
`