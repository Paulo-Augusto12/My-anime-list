export function useAllAnimes() {
  const filterOptions = [
    {
      genresOptions: [{}],
    },
    {
      typeOptions: [
        {
          option: "tv",
          value: "tv",
        },
        {
          option: "movie",
          value: "movie",
        },
        {
          option: "ova",
          value: "ova",
        },
        {
          option: "special",
          value: "special",
        },
        {
          option: "ona",
          value: "ona",
        },
        {
          option: "music",
          value: "music",
        },
      ],
    },
    {
      statusOPtions: [
        {
          option: "airing",
          value: "airing",
        },
        {
          option: "complete",
          value: "complete",
        },
        {
          option: "upcoming",
          value: "upcoming",
        },
      ],
    },
    {
      ageRestrictionOptions: [
        { option: "g", value: "g" },
        {
          option: "pg",
          value: "pg",
        },
        {
          option: "pg13",
          value: "pg13",
        },
        {
          option: "r17",
          value: "r17",
        },
        {
          option: "r",
          value: "r",
        },
        {
          option: "rx",
          value: "rx",
        },
      ],
    },
  ];

  return {
    elements: {
      filterOptions,
    },
  };
}
