import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Header from './components/Header'
import BucketHomePage from './components/BucketHomePage'
import Stack from 'react-bootstrap/Stack'
import Server from './api/Server';
import Home from './pages/Home';
import CardCreate from './pages/CardCreate';
import HistoryPage from './pages/HistoryPage';
import {ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/CardCreate' element={<CardCreate/>}></Route>
          <Route path='/HistoryPage' element={<HistoryPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
