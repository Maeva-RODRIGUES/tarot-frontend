// src/utils/mockData.js : Données fictives pour le front 

export const mockUserData = {
  name: "Alina",
  recentActivity: "06/06/2024",
  recentTime: "15h15",
  lastDraw: [
    "/src/assets/img/imperatrice.png",
    "/src/assets/img/lediable.png",
    "/src/assets/img/lemonde.png",
  ],
};

export const mockTarotDrawings = [
  {
    theme: "Amour",
    cards: [
      {
        image: "/src/assets/img/imperatrice.png",
        interpretation: "L'Impératrice symbolise la créativité, la fertilité et la prospérité."
      },
      {
        image: "/src/assets/img/lediable.png",
        interpretation: "Le Diable représente la tentation, l'attachement et les défis à surmonter."
      },
      {
        image: "/src/assets/img/lemonde.png",
        interpretation: "Le Monde signifie l'accomplissement, la complétude et l'harmonie."
      }
    ],
    generalInterpretation: "Ce tirage indique une période de grande créativité et d'accomplissement personnel. Vous êtes sur le point de récolter les fruits de votre travail acharné. Cependant, soyez vigilant face aux tentations et aux défis qui pourraient surgir."
  },
  {
    theme: "Carrière",
    cards: [
      {
        image: "/src/assets/img/rouedelafortune.png",
        interpretation: "L'Étoile est un symbole d'espoir, d'inspiration et de sérénité."
      },
      {
        image: "/src/assets/img/ermite.png",
        interpretation: "La Mort indique la fin d'un cycle, une transformation ou un changement profond."
      },
      {
        image: "/src/assets/img/lependu.png",
        interpretation: "Le Pendu représente la réflexion, la suspension et un point de vue différent."
      }
    ],
    generalInterpretation: "Ce tirage suggère une phase de transformation personnelle profonde. Vous pourriez être en train de vivre des changements importants qui nécessitent réflexion et adaptation. Gardez espoir et cherchez à voir les situations sous un nouvel angle pour avancer."
  }
];


