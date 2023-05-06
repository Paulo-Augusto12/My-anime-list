import { expect, expectTypeOf, test } from "vitest";
import { GetAllAnimeUseCase } from "../../../src/domain/useCases/AnimeUseCases/GetAllAnimesUseCase";
import { FakeAnimeRepository } from "../../Repository/fakeAnimeRepository";
import { RequestService } from "../../../src/domain/services/requestService";
import { AnimeModel } from "../../../src/domain/useCases/AnimeUseCases/Models/AnimeModels";

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

test("Should return an array of the anime model", async () => {
  const animes = await useCase.execute(params);
  const mockModel = [new AnimeModel('name', 'photo', 10, 'description')]
  expectTypeOf(animes).toEqualTypeOf(mockModel);
});

test("Anime should have an name", async () => {
  const data = await useCase.execute(params);

  const animeNames = data.map(({ name }) => name);
  const mockType = ''
  animeNames.forEach((name) => {
    expect(name).toHaveLength;
    expectTypeOf(name).toEqualTypeOf(mockType)
  });
});