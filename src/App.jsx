import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Preloader from "./layout/Preloader.jsx";
import DailyList from "./components/DailyList.jsx";

import {AppContext} from "./hooks/ContextComponent.jsx"
import ContextComponent from "./hooks/ContextComponent.jsx";
import Daily from "./components/Daily.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />

        <ContextComponent>
            <Daily />
        </ContextComponent>

        <Footer />
    </>
  )
}

export default App;
