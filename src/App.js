
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';
import Login from './components/Login/Login';
import SideNav from './components/Nav/SideNav';

function App() {
  return (
    <>
      <BrowserRouter>
          <SideNav />
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
