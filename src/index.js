import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import Navigation from './navigation';
import Header from './header';
import Services from './services';
import Login from './login';
import Footer from './footer';

class App extends Component {
   render(){
     return(
       <div>
      {/* Can use the title etc through as props */}
      <Navigation logoTitle="Tom Senior" />
      <Header title="Welcome To My Portfolio" button="Click To be Re-Directed to the About Page" para="React Portfolio"/>
      <Services />
      <Login  buttonName="Log In" user="Enter Username:" pass="Enter Password:"/>
      <Footer />
      </div>
     );
   }
}

ReactDOM.render( <App />, document.getElementById('root'));

