import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import React from 'react';
import Layout from '../components/common/layout/Layout';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';

const MainNavigation = () => {
    return (
        <Router>
            <Routes>
                 <Route element={<Layout />} path="/contractors">
                    <Route element={<Home />} path="home" />
                    <Route element={<Contact />} path="contact" />
                </Route>
                <Route path="*" element={<Navigate to="/contractors/home" />} /> 
            </Routes>
        </Router>
    )
}

export default MainNavigation;