import {BrowserRouter, Routes, Route} from "react-router-dom"; 

import LaptopsHome from './pages/LaptopsHome'; 
import BrowseAll from './pages/BrowseAll';
import BrowseBusiness from './pages/BrowseBusiness'; 
import BrowseHomeStudy from './pages/BrowseHomeStudy'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LaptopsHome/>}/>
          <Route path="/browse/all" element={<BrowseAll/>}/>
          <Route path="/browse/business" element={<BrowseBusiness/>}/>
          <Route path="/browse/home&study" element={<BrowseHomeStudy/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
