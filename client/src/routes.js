import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"

import { AccountPage } from "./pages/AccountPage";
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/account" element={<AccountPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/" element={<HomePage />} />
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    );
}