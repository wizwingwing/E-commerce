import Navbar from './Component/Navbar'
import FlashSale from './Component/Flashsale'
import {BrowserRouter as Rouster,Switch,Route,Link, Router, BrowserRouter} from 'react-router-dom'
import "./css" 

function App() {
  
  return (
    <Rouster>
      <div>
        <Navbar/>
        <FlashSale/>
      </div>
    </Rouster>
  );
}

export default App;
