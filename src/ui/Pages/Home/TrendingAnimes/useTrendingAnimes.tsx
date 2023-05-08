import React, { useEffect, useState } from "react";
import { RequestService } from "../../../../domain/services/requestService";
import { AnimesRepository } from "../../../../data/AnimesRepository";
import { GetARandomCharacterUseCase } from "../../../../domain/useCases/CharacterUseCase/GetARandomCharacterUseCase";
import { CharactersRepository } from "../../../../data/CharactersRepository";

export function useTrendingAnimes() {
  // ------------------------ Depencency injection ------------------------ //

  // Http service

  const httpService = new RequestService();

  //

  // Repositories

  const charactersRepository = new CharactersRepository(httpService);
  const animesRepository = new AnimesRepository(httpService);

  //

  // Use Cases

  const getARandomCharacterUseCase = new GetARandomCharacterUseCase(
    charactersRepository
  );

  //

  // ------------------------ Depencency injection ------------------------ //

  const [characterPhoto, setCharacterPhoto] = useState("");

  async function randomCharacterPhoto() {
    const data = await getARandomCharacterUseCase.execute();

    setCharacterPhoto(data.photo)
  }

  useEffect(() => {
    if(!characterPhoto.trim()){
      randomCharacterPhoto()
    }
  }, [])

  return {
    states: {},
    actions: {},
    visualElements: {
      characterPhoto,
    },
  };
}
