import React, { Component } from 'react';
import './login.css';


class Login extends Component {
    render(){
        return(
            <div className="Login">
            <div className='title'>
                <h1>Log In Page</h1>
            </div>
            <div className="inputs">
                <label>{this.props.user}</label>
                <input type="text" placeholder={this.props.user}></input>
                <label>{this.props.pass}</label>
                <input type="password" placeholder={this.props.pass}></input>
                <a href="#home">{this.props.buttonName}</a>
            </div>
            </div>
        );
}}
export default Login;