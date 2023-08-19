import { BrowserRouter as Router, Routes } from 'react-router-dom'
import React from 'react';

const MainNavigation = () => {
    return (
        <Router>
            <Routes>
                {/* <Route element={<Layout />} path="/example">
                    <Route element={<Home />} path="home" />
                </Route>
                <Route path="*" element={<Navigate to="/example/home" />} /> */}
            </Routes>
        </Router>
    )
}

export default MainNavigation;