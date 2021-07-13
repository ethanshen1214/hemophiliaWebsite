import React from 'react';
import { Switch, Route } from 'react-router-dom';//, BrowserRouter
import Home from './home';
import About from './about';
// import Countries from './countries';
// import CountryPage from './countryPage';
// import Cities from './cities';
// import CityPage from './cityPage';
// import Landmarks from './landmarks';
// import LandmarkPage from './landmarkPage';


export default function Routes() {
    return( //router component that controls which page is loaded
        <Switch>
            <Route path="/about" component={About} />

            {/* <Route path="/countries" exact component={Countries}/>
            <Route path="/countries/:country_name" component={CountryPage}/>

            <Route path="/cities" exact component={Cities}/>
            <Route path="/cities/:city_name" component={CityPage}/>

            <Route path="/landmarks" exact component={Landmarks}/>
            <Route path="/landmarks/:landmark_name" component={LandmarkPage}/> */}
            
            <Route path="/" component={Home} />
        </Switch>
    )
}