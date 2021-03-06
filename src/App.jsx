import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Feed from "./components/feed";
import Widgets from "./components/widgets";
import Login from "./components/login";

class App extends Component {
    render() { 
        const user = null;
        return ( 
        <div className="app">
            {!user ? 
            <Login/>
             : (
                <>
                    <Header/>

                    <div className="app__body">
                        <Sidebar/>
                        <Feed/>
                        <Widgets/>
                    </div>
                </>
            )}
        </div> );
    }
}
 
export default App;