import Navbar from './Component/Navbar'

import {BrowserRouter as Rouster,Switch,Route,Link, Router, BrowserRouter} from 'react-router-dom'
import "./css" 
function App() {
  return (
    <Rouster>
      <div>
        <Navbar/>
        
      </div>
    </Rouster>
  );
}

export default App;
