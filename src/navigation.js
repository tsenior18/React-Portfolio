import React, { Component } from 'react';
import '../src/css/navigation.css';

class Navigation extends Component {
    render(){
        const sections = ['Home', 'About', 'Servives', 'Portfolio', 'Contact'];
        const navLinks = sections.map(section =>{
            return ( 
                <li><a href={'#' + section}>{section}</a></li> // Will call the Index of the name of the Section
            )
        });
        return(
            <nav>
                <h2 className="logo">{this.props.logoTitle}</h2>
                <ul>
                    {navLinks} 
                    {/* Will call the nav bar links from above */}
                </ul>
            </nav>
        );
}}
export default Navigation;
