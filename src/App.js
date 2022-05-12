import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { About } from './pages/About/About';
import Home from './pages/Home/Home';
import { SignUp } from './pages/SignUp/SignUp';
import Header from "./components/Header/Header";



export default function  App () {
   return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

