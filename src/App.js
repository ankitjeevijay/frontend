
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ProductDetail from './components/products/ProductDetail';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route Exact path="/" element={<Home />} />
        <Route Exact path="/productdetail/:id" element={<ProductDetail/>} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
