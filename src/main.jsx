import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'

import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Course from './Pages/Course.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import Signin from './Pages/Signin.jsx' 
import Form from './Pages/Form.jsx';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />}/>
      <Route path="course" element={<Course />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="form/:id" element={<Form />}/>
      <Route path="login" element={<Login />}/>
      <Route path="signin" element={<Signin />}/>
    </Routes>
  </BrowserRouter>,
)
