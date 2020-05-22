import React, { Component } from 'react';
import '../src/css/login.css';

// const users = [
//     {
//         users: 'tom',
//         password: 'tom'
//     },
//     {
//         user:'emma',
//         password: 'emma'
//     }
// ];

class Login extends Component {
        validate() {

        var un = document.querySelector(".uInput").value;
        var pw = document.querySelector(".pInput").value;
        var valid = -1;
    
        var unArray = ["tom", "emma"];
        var pwArray = ["tom", "emma"];
        
        for (var i=0; i <unArray.length; i++) {
            if ((un === unArray[i]) && (pw === pwArray[i])) {
                valid = i;
                window.location.href  = 'https://www.google.com';
                break;
            }
        }
        if (valid !== -1) {
            alert ("Login was successful");
        }
        else {
            alert("Invalid Username and/or Password! Please try again. You will not be able to submit this form without a successful login")
            document.querySelector(".uInput").value = "";
            document.querySelector(".pInput").value = "";
        }
    };

    render(){
        return(
            <div className="Login">
                <div className='title'>
                    <h1>Log In Page</h1>
                <div className="inputs">
                    <label>{this.props.user}</label>
                    <input className="uInput" type="text" placeholder={this.props.user}></input>
                    <label>{this.props.pass}</label>
                    <input className="pInput" type="password" placeholder={this.props.pass}></input>
                    <button onClick={this.validate}>{this.props.buttonName}</button>
                </div>
                </div>
            </div>
      );
    }
}
export default Login;