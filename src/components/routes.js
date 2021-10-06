import React from 'react';
import { Switch, Route } from 'react-router-dom';//, BrowserRouter
import Home from './home';
// import About from './about';
// import Countries from './countries';
// import CountryPage from './countryPage';
// import Cities from './cities';
// import CityPage from './cityPage';
// import Landmarks from './landmarks';
// import LandmarkPage from './landmarkPage';

/**
 * Copyright (c) 2021
 *
 * @summary For setting up REST routing in the future; currently unused
 * @author Ethan Shen <ethanshen1214@gmail.com>
 *
 * Created at     : 2021-07-12 
 * Last modified  : 2021-10-06
 */


export default function Routes() {
    return( //router component that controls which page is loaded
        <Switch>
            {/* placeholder for expansion in the future */}
            <Route path="/" component={Home} />
        </Switch>
    )
}