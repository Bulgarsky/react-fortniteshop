import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Daily from "./components/Daily.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Daily />
        <Footer />
    </>
  )
}

export default App
