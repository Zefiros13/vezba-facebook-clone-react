import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Feed from "./components/feed";

class App extends Component {
    render() { 
        return ( 
        <div className="app">
            <Header/>

            <div className="app__body">
                <Sidebar/>
                <Feed/>
            </div>
        </div> );
    }
}
 
export default App;