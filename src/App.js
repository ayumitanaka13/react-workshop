// routing setting
import React from 'react'
// need {} except for export default name
import { Reset } from 'styled-reset'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './components/Header'

import Index from './pages/Index'
import ProductDetail from './pages/ProductDetail'
import RegistProduct from './pages/RegistProduct'

const App = () => {
  return (
    <React.Fragment>
      <Reset />
      <Router>
        <Switch>
          <Route path='/header'>
            <Header />
          </Route>
          <Route path='/product-detail'>
            <ProductDetail />
          </Route>
          <Route path='/regist-product'>
            <RegistProduct />
          </Route>
          {/* path='/' should be bottom */}
          <Route path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;

// Old Code

// import logo from './logo.svg';
// import './App.css';
// import ClockWithUse from './ClockWithUse';
// import Clock from './Clock';

{/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ClockWithUse date={new Date()} />
        <Clock date={new Date()}/>
      </header>
    </div>
  );
}

export default App;
 */}