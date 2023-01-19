
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AreasPage from './Pages/AreasPage/AreasPage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import StartPage from './Pages/Startpage/Startpage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/areas" element={<AreasPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
