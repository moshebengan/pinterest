import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import Homepage from "./routes/homepage/Hompage.jsx";
// import CreatePage from "./routes/createPage/CreatePage.jsx";
// import PostPage from "./routes/postPage/PostPage.jsx";
// import AuthPage from "./routes/authPage/AuthPage.jsx";
// import UserProfilePage from "./routes/userProfilePage/UserProfilePage.jsx";
// import SearchPage from "./routes/searchPage/SearchPage.jsx";
import MainLayout from "./routes/layouts/mainLayout.jsx";

const Homepage = React.lazy(() => import("./routes/homepage/Homepage.jsx"));
const CreatePage = React.lazy(() => import("./routes/createPage/CreatePage.jsx"));
const PostPage = React.lazy(() => import("./routes/postPage/PostPage.jsx"));
const UserProfilePage = React.lazy(() =>
  import("./routes/userProfilePage/UserProfilePage.jsx")
);
const SearchPage = React.lazy(() => import("./routes/searchPage/SearchPage.jsx"));
const AuthPage = React.lazy(() => import("./routes/authPage/AuthPage.jsx"));

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/pin/:id" element={<PostPage />} />
            <Route path="/:username" element={<UserProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
