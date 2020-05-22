import React, { Component } from 'react';
import './header.css';

class Header extends Component{
render(){
 return (
     <header>
         <h1>{this.props.title}</h1>
         <p>Welcome to my first try</p>
         <a href="#home">{this.props.button}</a>
     </header>
 );
}

};
export default Header;