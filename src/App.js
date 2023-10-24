
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
