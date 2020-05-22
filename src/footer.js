import React, { Component } from 'react';
import '../src/css/footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="second-footer">
                    <ul>
                            <List myList={userobj[3].name} />
                            <List myImage={userobj[0].icon} />
                            <List myBasket={userobj[1].icon} />
                            <List airplane={userobj[2].icon} />
                    </ul>
                </div>
                </div>
        );
    }
}
const userobj = [
    {
        icon: <ion-icon name="logo-linkedin"></ion-icon>,
    },
    {
        icon: <ion-icon name="basket-outline"></ion-icon>
    },
    {
       icon: <ion-icon name="airplane-outline"></ion-icon>
    },
    {
        name: 'Made by Tom Senior - 2020'
    }
]
class List extends Component{
    render(){
        return(
            <div>
                <span>
                <h1>{this.props.myList}</h1>
                <a href="#linkedin">{this.props.myImage}</a>
                <a href="#basket">{this.props.myBasket}</a>
                <a href="#airplane">{this.props.airplane}</a>    
                </span>
            </div>
        );
    }
}
export default Footer;