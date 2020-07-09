import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import Counter from './containers/Counter/Counter';
import './App.css';
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import RoomsPage from "./pages/Rooms";
import Gallery from "./pages/Gallery";



const notFound = () => (
    <div>
        <h1>
            Sorry, This Page does not Exist
        </h1>
    </div>
);




class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'  component={Landing}/>
                <Route exact path='/rooms'  component={RoomsPage}/>
                <Route exact path='/gallery'  component={Gallery}/>
                <Route exact path='/contact'  component={Contact}/>
                <Route component={notFound}/>
            </Switch>
        </BrowserRouter>

    );
  }
}

export default App;
