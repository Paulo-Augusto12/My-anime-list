import React, { useState } from "react";
import { Link } from "react-router-dom";

export function useHeader() {
  const [selectedElement, setSelectedElement] = useState(1);
  const headerNavItems = [
    {
      label: "Anime",
      id: 1,
      path: "/",
      onClick: () => {<Link to={"/"} />},
    },
    {
      label: "Manga",
      id: 2,
      path: "/manga/home",
      onClick: () => {<Link to={"/manga"} />},
    },
    {
      label: "Random Anime",
      id: 3,
      path: "/anime/random",
      onClick: () => {<Link to={"/random"} />},
    },
    {
      label: "Top Anime",
      id: 4,
      path: "/top",
      onClick: () => {<Link to={"/top"} />},
    },
  ];

  return {
    headerNavItems,
    selectedElement,
    setSelectedElement,
  };
}
