import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import BucketHomePage from './components/BucketHomePage'
import Stack from 'react-bootstrap/Stack'

function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      {/* visit every bucket using map */}
      <Stack gap={3}>
      <BucketHomePage/>
      <BucketHomePage/>
      <BucketHomePage/>
      
      </Stack>
    </div>
  );
}

export default App;
