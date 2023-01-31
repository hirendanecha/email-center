import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Connect from './components/Connect';
import Alphag from './components/Alphag';
import Backendg from './components/Backendg';
import Successg from './components/Successg';
import Successo from './components/Successo';
import Backendo from './components/Backendo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Connect />} />
          <Route path="/alphag" element={<Alphag />} />
          <Route path="/backendg" element={<Backendg />} />
          <Route path="/successg" element={<Successg />} />
          <Route path="/backendo" element={<Backendo />} />
          <Route path="/successo" element={<Successo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
