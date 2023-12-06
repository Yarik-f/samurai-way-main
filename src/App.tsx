import React from 'react';
import  './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'content'}>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} component={Dialogs}/>
                <Route path={'/news'}>
                    dsfsdfsdf
                </Route>
            </div>

        </div>
    );
}


export default App;
