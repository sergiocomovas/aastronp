//Cambia este número. "Astro" solo renderizará los pueblos de Baleares con más habitantes.
let numero = 30000;

export async function get({ params, request }) {
  return {
    body: JSON.stringify(
      [
        {
          PUEBLO: "07002 Alaior",
          HABITANTES: 9477,
        },
        {
          PUEBLO: "07001 Alaró",
          HABITANTES: 5741,
        },
        {
          PUEBLO: "07003 Alcúdia",
          HABITANTES: 20651,
        },
        {
          PUEBLO: "07004 Algaida",
          HABITANTES: 5963,
        },
        {
          PUEBLO: "07005 Andratx",
          HABITANTES: 11571,
        },
        {
          PUEBLO: "07901 Ariany",
          HABITANTES: 897,
        },
        {
          PUEBLO: "07006 Artà",
          HABITANTES: 7984,
        },
        {
          PUEBLO: "07007 Banyalbufar",
          HABITANTES: 542,
        },
        {
          PUEBLO: "07008 Binissalem",
          HABITANTES: 8895,
        },
        {
          PUEBLO: "07009 Búger",
          HABITANTES: 1084,
        },
        {
          PUEBLO: "07010 Bunyola",
          HABITANTES: 7037,
        },
        {
          PUEBLO: "07011 Calvià",
          HABITANTES: 51567,
        },
        {
          PUEBLO: "07012 Campanet",
          HABITANTES: 2684,
        },
        {
          PUEBLO: "07013 Campos",
          HABITANTES: 11425,
        },
        {
          PUEBLO: "07014 Capdepera",
          HABITANTES: 12003,
        },
        {
          PUEBLO: "07064 Castell, Es",
          HABITANTES: 753,
        },
        {
          PUEBLO: "07015 Ciutadella de Menorca",
          HABITANTES: 30638,
        },
        {
          PUEBLO: "07016 Consell",
          HABITANTES: 4243,
        },
        {
          PUEBLO: "07017 Costitx",
          HABITANTES: 1379,
        },
        {
          PUEBLO: "07018 Deià",
          HABITANTES: 674,
        },
        {
          PUEBLO: "07026 Eivissa",
          HABITANTES: 50643,
        },
        {
          PUEBLO: "07019 Escorca",
          HABITANTES: 181,
        },
        {
          PUEBLO: "07020 Esporles",
          HABITANTES: 5134,
        },
        {
          PUEBLO: "07021 Estellencs",
          HABITANTES: 326,
        },
        {
          PUEBLO: "07022 Felanitx",
          HABITANTES: 18164,
        },
        {
          PUEBLO: "07023 Ferreries",
          HABITANTES: 4892,
        },
        {
          PUEBLO: "07024 Formentera",
          HABITANTES: 11708,
        },
        {
          PUEBLO: "07025 Fornalutx",
          HABITANTES: 682,
        },
        {
          PUEBLO: "07027 Inca",
          HABITANTES: 33726,
        },
        {
          PUEBLO: "07028 Lloret de Vistalegre",
          HABITANTES: 1465,
        },
        {
          PUEBLO: "07029 Lloseta",
          HABITANTES: 625,
        },
        {
          PUEBLO: "07030 Llubí",
          HABITANTES: 2385,
        },
        {
          PUEBLO: "07031 Llucmajor",
          HABITANTES: 38224,
        },
        {
          PUEBLO: "07033 Manacor",
          HABITANTES: 44809,
        },
        {
          PUEBLO: "07034 Mancor de la Vall",
          HABITANTES: 1569,
        },
        {
          PUEBLO: "07032 Maó",
          HABITANTES: 29578,
        },
        {
          PUEBLO: "07035 Maria de la Salut",
          HABITANTES: 2242,
        },
        {
          PUEBLO: "07036 Marratxí",
          HABITANTES: 38357,
        },
        {
          PUEBLO: "07037 Mercadal, Es",
          HABITANTES: 5444,
        },
        {
          PUEBLO: "07902 Migjorn Gran, Es",
          HABITANTES: 15,
        },
        {
          PUEBLO: "07038 Montuïri",
          HABITANTES: 3087,
        },
        {
          PUEBLO: "07039 Muro",
          HABITANTES: 7515,
        },
        {
          PUEBLO: "07040 Palma",
          HABITANTES: 419366,
        },
        {
          PUEBLO: "07041 Petra",
          HABITANTES: 3028,
        },
        {
          PUEBLO: "07044 Pobla, Sa",
          HABITANTES: 13873,
        },
        {
          PUEBLO: "07042 Pollença",
          HABITANTES: 16969,
        },
        {
          PUEBLO: "07043 Porreres",
          HABITANTES: 5624,
        },
        {
          PUEBLO: "07045 Puigpunyent",
          HABITANTES: 2057,
        },
        {
          PUEBLO: "07059 Salines, Ses",
          HABITANTES: 501,
        },
        {
          PUEBLO: "07046 Sant Antoni de Portmany",
          HABITANTES: 27205,
        },
        {
          PUEBLO: "07049 Sant Joan",
          HABITANTES: 2185,
        },
        {
          PUEBLO: "07050 Sant Joan de Labritja",
          HABITANTES: 6635,
        },
        {
          PUEBLO: "07048 Sant Josep de sa Talaia",
          HABITANTES: 28299,
        },
        {
          PUEBLO: "07051 Sant Llorenç des Cardassar",
          HABITANTES: 892,
        },
        {
          PUEBLO: "07052 Sant Lluís",
          HABITANTES: 6877,
        },
        {
          PUEBLO: "07053 Santa Eugènia",
          HABITANTES: 1724,
        },
        {
          PUEBLO: "07054 Santa Eulària des Riu",
          HABITANTES: 40038,
        },
        {
          PUEBLO: "07055 Santa Margalida",
          HABITANTES: 12767,
        },
        {
          PUEBLO: "07056 Santa María del Camí",
          HABITANTES: 7507,
        },
        {
          PUEBLO: "07057 Santanyí",
          HABITANTES: 12342,
        },
        {
          PUEBLO: "07058 Selva",
          HABITANTES: 4126,
        },
        {
          PUEBLO: "07047 Sencelles",
          HABITANTES: 3542,
        },
        {
          PUEBLO: "07060 Sineu",
          HABITANTES: 4122,
        },
        {
          PUEBLO: "07061 Sóller",
          HABITANTES: 13491,
        },
        {
          PUEBLO: "07062 Son Servera",
          HABITANTES: 11835,
        },
        {
          PUEBLO: "07063 Valldemossa",
          HABITANTES: 2042,
        },
        {
          PUEBLO: "07065 Vilafranca de Bonany",
          HABITANTES: 3558,
        },
      ]
        .filter(function (pueblo) {
          return pueblo.HABITANTES > numero;
        })
        .sort((a, b) => {return b.HABITANTES - a.HABITANTES})
    ),
  };
}
