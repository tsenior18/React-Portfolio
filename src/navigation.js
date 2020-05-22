import React, { Component } from 'react';
import '../src/css/navigation.css';

const logoTitle = 'Tom Senior'
const section = [
    { 
        user:'Home',
        href: 'https://wwww.google.com'
    },
    {
        user:'About',
        href: 'https://wwww.google.com'
    },
    {
        user:'Services',
        href: 'https://wwww.google.com'
    },
    {
        user:'Portfolio',
        href: 'https://wwww.google.com'
    },
    {
        user:'Contact',
        href: 'https://wwww.google.com'
    } 
];

class Navigation extends Component {
    render(){
        return(
            <nav>
                <h2 className="logo">{logoTitle}</h2>
                    <Navlinks myUser={section[0].user} myLink={section[0].href}/>
                    <Navlinks myUser={section[1].user} myLink={section[1].href}/>
                    <Navlinks myUser={section[2].user} myLink={section[2].href}/>
                    <Navlinks myUser={section[3].user} myLink={section[3].href}/>
            </nav>
        );
}}

class Navlinks extends Component{
    render(){
        return(
            <a href={this.props.myLink}>{this.props.myUser}</a>
        );
    }
}
export default Navigation;