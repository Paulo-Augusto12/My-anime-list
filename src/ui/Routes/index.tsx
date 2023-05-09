import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { RandomAnime } from "../Pages/RandomAnime";
import { TopAnime } from "../Pages/TopAnime";
import { MangaHome } from "../Pages/HomeMangas";

// Imports de paginas

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/manga/home" element={<MangaHome />} />
      </Routes>
      <Routes>
        <Route path="/anime/random" element={<RandomAnime />} />
      </Routes>
      <Routes>
        <Route path="/top" element={<TopAnime />} />
      </Routes>
    </BrowserRouter>
  );
}
