import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';

class App extends Component {
    render() { 
        return ( 
        <div className="app">
            <Header/>

            <div className="app__body">
                <Sidebar/>
            </div>
        </div> );
    }
}
 
export default App;