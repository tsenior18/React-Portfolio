import React, { Component } from 'react';
import '../src/css/services.css';

class Services extends Component{
    render(){
        return(
            <div className="services">
                <h3>My Skill Set</h3>
                <h2>Programming Languages I know:</h2>
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
        icon: <ion-icon name="logo-html5"></ion-icon>,
        titles: 'HTML',
        description: 'Designing Layouts for Responsive Webpages'
    },
    {
        icon: <ion-icon name="logo-html5"></ion-icon>,
        titles: 'CSS',
        description: 'Using relative Styling to webpages'
    },
    {
        icon: <ion-icon name="logo-javascript"></ion-icon>,
        titles: 'JavaScript',
        description: 'Creating functional Elements of the webpage'
    },
    {
        icon: <ion-icon name="logo-react"></ion-icon>,
        titles: 'React',
        description: 'Using React to develop function webpages, Using their framework'
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


