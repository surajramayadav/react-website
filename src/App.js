import React ,{ Component } from 'react';
import Header from './Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter,
    Redirect
  } from "react-router-dom";
import Home from './Home';
import service from './Service';
import About from './About';
import Contact from './Contact';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                
                <Route exact path="/service" component={service}/>
                
                <Route exact path="/about" component={About}/>
                 
                <Route exact path="/contact" component={Contact}/>

              <Redirect to="/"/>

            </Switch>
            </BrowserRouter>
            
        );
    }
}
export default App;