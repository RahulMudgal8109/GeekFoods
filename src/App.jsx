import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Quotes from "./components/Quotes";
import Restraunt from "./components/Restraunt";

function App() {
 

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="quotes" element={<Quotes/>}></Route>
        
        <Route path="restraunt" element={<Restraunt/>}></Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
