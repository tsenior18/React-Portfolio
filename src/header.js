import React, { Component } from 'react';
import Background from './img/mexico.jpeg';
import './header.css';

const myStyles = {
    backgroundImage: `url(${Background})`,
    height: '50vh',
    backgroundSize: 'cover'
}

class Header extends Component{
render(){
 return (
     <header style={myStyles}>
         <h1>{this.props.title}</h1>
         <p>Welcome to my first try</p>
         <a href="#home">{this.props.button}</a>
     </header>
 );
}

};
export default Header;