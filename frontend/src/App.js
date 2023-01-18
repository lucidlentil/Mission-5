import {BrowserRouter, Routes, Route} from "react-router-dom"; 

import LaptopsHome from './pages/LaptopsHome'; 
import BrowseLaptops from './pages/BrowseLaptops'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LaptopsHome/>}/>
          <Route path="/browse" element={<BrowseLaptops/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
