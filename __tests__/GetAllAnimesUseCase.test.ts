import { expect, test } from "vitest";
import { GetAllAnimeUseCase } from "../src/domain/useCases/AnimeUseCases/GetAllAnimesUseCase";
import { FakeAnimeRepository } from "./fakeAnimeRepository";
import { RequestService } from "../src/domain/services/requestService";
import { AnimeModel } from "../src/domain/useCases/AnimeUseCases/Models/AnimeModels";

//http service

const httpService = new RequestService();

//

// repository

const repository = new FakeAnimeRepository(httpService);

//

// useCase

const useCase = new GetAllAnimeUseCase(repository);

//

// useCaseCall

const params = { page: 0, limit: 0 };

//

async function getAnimesUseCase(): Promise<AnimeModel[]> {
  return await useCase.execute(params);
}

async function getAnimesNames(): Promise<string[]> {
  const data = await useCase.execute(params);
  const names = data.map(({ name }) => name);
  return names;
}

test("Should return an array of the anime Model", async () => {
  const animes = await getAnimesUseCase();
  expect(animes).toMatchObject(animes);
});

test("Anime name should be an string or null", async () => {
  const names = await getAnimesNames();

  names.forEach((name) => {
    expect(typeof name).toBeTypeOf("string");
  });
});
