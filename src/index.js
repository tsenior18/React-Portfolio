import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navigation from './navigation';
import Header from './header';
import * as serviceWorker from './serviceWorker';

class App extends Component {
   render(){
     return(
       <div>
      {/* Can use the title etc through as props */}
      <Navigation logoTitle="React Project" />
      <Header title="Stylish Portfolio" button="Find Out More"/> 
      </div>
     );
   }
}

ReactDOM.render( <App />, document.getElementById('root'));
serviceWorker.unregister();
