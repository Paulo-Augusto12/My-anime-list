import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { MangaHome } from "../Pages/Manga";
import { RandomAnime } from "../Pages/RandomAnime";
import { TopAnime } from "../Pages/TopAnime";

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
