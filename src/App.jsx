import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Feed from "./components/feed";
import Widgets from "./components/widgets";

class App extends Component {
    render() { 
        return ( 
        <div className="app">
            <Header/>

            <div className="app__body">
                <Sidebar/>
                <Feed/>
                <Widgets/>
            </div>
        </div> );
    }
}
 
export default App;