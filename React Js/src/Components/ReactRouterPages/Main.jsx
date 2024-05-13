import React from 'react'
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function Main() {
    return (
        <BrowserRouter>
          <div>


            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
    
           
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>

          </div>
        </BrowserRouter>
      );
}

export default Main



 
