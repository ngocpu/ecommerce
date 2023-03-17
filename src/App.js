import './App.css';
import Homepages from './views/homepages/Homepages'
import Abouts from './views/abouts/Abouts'
import Contact from './views/contact/Contact'
import { Footer, Navbar } from './components';
import { Route, Routes } from 'react-router-dom';
import Products from './views/products/Products';
import React from "react";


export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Some thing went wrong</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepages />} ></Route>
        <Route path='/all-products' element={<Products />} />
        <Route path="/abouts" element={<Abouts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
