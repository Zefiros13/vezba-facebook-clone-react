import React, { Component } from 'react';
import Header from './components/header';

class App extends Component {
    render() { 
        return ( 
        <div className="app">
            <Header/>

            <div className="app__body">
            </div>
        </div> );
    }
}
 
export default App;