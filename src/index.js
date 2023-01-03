import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tag from './components/Tags'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <Tag/>
        <Footer/>
    </React.StrictMode>
);

reportWebVitals(console.log());
