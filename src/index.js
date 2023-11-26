import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>

<Routes>
  <Route path="/" element={<App/>}/>
  <Route path="/details/:id" element={<Details/>}/>

</Routes>

</BrowserRouter>


);
  
