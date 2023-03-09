import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Header from './components/Header'
import BucketHomePage from './components/BucketHomePage'
import Stack from 'react-bootstrap/Stack'
import Server from './api/Server';
import Home from './pages/Home';


const App = () => {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
