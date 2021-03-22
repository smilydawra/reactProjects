import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MapView from './components/MapView';

ReactDOM.render(
  <div class="container my-4">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route exact path="/mapview" component={MapView} /> */}
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
