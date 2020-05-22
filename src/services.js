import React, { Component } from 'react';
import './services.css';

class Services extends Component{
    render(){
        return(
            <div className="services">
                <h3>services</h3>
                <h2>What We Offer?</h2>
            <div className="row">
                    <Icons myIcon={iconobj[0].icon} myTitle={iconobj[0].titles}  myDescription={iconobj[0].description}/>
                    <Icons myIcon={iconobj[1].icon} myTitle={iconobj[1].titles}  myDescription={iconobj[1].description}/>
                    <Icons myIcon={iconobj[2].icon} myTitle={iconobj[2].titles}  myDescription={iconobj[2].description}/>
                    <Icons myIcon={iconobj[3].icon} myTitle={iconobj[3].titles}  myDescription={iconobj[3].description}/>
            </div>
            </div>
        );
    }
}

const iconobj = [
    {
        icon: <ion-icon name="call-outline"></ion-icon>,
        titles: 'Responsive',
        description: 'Example Text'
    },
    {
        icon: <ion-icon name="brush-outline"></ion-icon>,
        titles: 'Designed',
        description: 'Example Text'
    },
    {
        icon: <ion-icon name="thumbs-up-outline"></ion-icon>,
        titles: 'Favourite',
        description: 'Example Text'
    },
    {
        icon: <ion-icon name="help-outline"></ion-icon>,
        titles: 'Question',
        description: 'Example Text'
    }
]

class Icons extends Component {
    render(){
        return(
            <div>
                <span>
                    {this.props.myIcon}
                </span>
                <h4>{this.props.myTitle}</h4>
                <p>{this.props.myDescription}</p>
            </div>
        );
    }
}
export default Services;


