import {BrowserRouter, Routes, Route} from "react-router-dom"; 

import LaptopsHome from './pages/LaptopsHome'; 
import BrowseAllPage from './pages/BrowseAll';
import BrowseBusinessPage from './pages/BrowseBusiness'; 
import BrowseHomeStudyPage from './pages/BrowseHomeStudy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LaptopsHome/>}/>
          <Route path="/browse/all" element={<BrowseAllPage/>}/>
          <Route path="/browse/business" element={<BrowseBusinessPage/>}/>
          <Route path="/browse/home&study" element={<BrowseHomeStudyPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
