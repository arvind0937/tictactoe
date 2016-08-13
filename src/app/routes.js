import { Route } from "react-router";
import React from "react";
import _ from 'lodash';
import App from "./components/app";


let
  getComponents = (componentId, params,callback) => {
  if (componentId === 'home'){
        require.ensure( [], function ( require ) {
             callback( null, require( './components/home' ) );
           }, 'brandSearch' )
      }
  };

export default (
  <Route component={App} path="/ui">
    <Route path="home" getComponents={_.partial(getComponents,'home')} />
  </Route>
);
