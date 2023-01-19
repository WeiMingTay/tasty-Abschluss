
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AreasPage from './Pages/AreasPage/AreasPage';
import StartPage from './Pages/Startpage/Startpage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/areas" element={<AreasPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
