import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import View from "./components/View";
import Edit from "./components/Edit";
import { Categoria } from "./components/Categoria";

function App() {

 

  return (
   
  
   
    <div className="App">
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/view/:id" element={<View/>}/>
          <Route exact path="/edit/:id" element={<Edit/>}/>
          <Route exact path="/categoria/:id" element={<Categoria/>}/>
       
        </Routes>
    </Router>
</div>


 
       

      
  
  );
}

export default App
