import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import LinksPage from "./pages/LinksPage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import AuthPage from "./pages/AuthPage";

const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/links" exact element={<LinksPage />} />
                <Route path="/create" exact element={<CreatePage />}/>
                <Route path="/detail/:id" exact element={<DetailPage />}/>
                <Route path="*" element={<Navigate to="/create" />} />
            </Routes>

        )
    }
    return (
        <Routes>
            <Route path="/" exact element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
};

export default useRoutes;
