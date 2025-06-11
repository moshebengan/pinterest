import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

import Homepage from "./routes/homepage/Hompage.jsx";
import CreatePage from "./routes/createPage/CreatePage.jsx";
import PostPage from "./routes/postPage/PostPage.jsx";
import AuthPage from "./routes/authPage/AuthPage.jsx";
import UserProfilePage from "./routes/userProfilePage/UserProfilePage.jsx";
import SearchPage from "./routes/searchPage/SearchPage.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/pin/:id" element={<PostPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<UserProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
