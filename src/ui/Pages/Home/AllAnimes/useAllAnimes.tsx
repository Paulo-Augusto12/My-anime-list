import { useState } from "react";
import { AnimeModel } from "../../../../domain/useCases/AnimeUseCases/Models/AnimeModels";
import { useNavigate } from "react-router-dom";

export function useAllAnimes() {
  const navigate = useNavigate();
  const [selectedAnime, setSelectedAnime] = useState<AnimeModel>();

  async function handleNavigateToAnimePage(anime: AnimeModel ) {
    navigate("/anime", { state: {anime} });
  }

  return {
    handleNavigateToAnimePage,
    setSelectedAnime,
  };
}
