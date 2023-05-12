import Link from "next/link";
import React from "react";

type Props = {};

async function HomePage({}: Props) {
  const list = [
    "almay",
    "alva",
    "anna sui",
    "annabelle",
    "benefit",
    "boosh",
    "burt's bees",
    "butter london",
    "c'est moi",
    "cargo cosmetics",
    "china glaze",
    "clinique",
    "coastal classic creation",
    "colourpop",
    "covergirl",
    "dalish",
    "deciem",
    "dior",
    "dr. hauschka",
    "e.l.f.",
    "essie",
    "fenty",
    "glossier",
    "green people",
    "iman",
    "l'oreal",
    "lotus cosmetics usa",
    "maia's mineral galaxy",
    "marcelle",
    "marienatie",
    "maybelline",
    "milani",
    "mineral fusion",
    "misa",
    "mistura",
    "moov",
    "nudus",
    "nyx",
    "orly",
    "pacifica",
    "penny lane organics",
    "physicians formula",
    "piggy paint",
    "pure anada",
    "rejuva minerals",
    "revlon",
    "sally b's skin yummies",
    "salon perfect",
    "sante",
    "sinful colours",
    "smashbox",
    "stila",
    "suncoat",
    "w3llpeople",
    "wet n wild",
    "zorah",
    "zorah biocosmetiques",
  ];
  const typeList = ['Blush','Bronzer','Eyeliner','Eyeshadow','Foundation','Lip liner','Lipstick','Mascara','Nail polish']
  return (
    <div className="space-y-5 px-3 py-4">
      <h1 className="text-xl font-bold">Brand</h1>
      <ul className="grid grid-cols-3 sm:grid-grid-cols-4 md:grid-cols-5 lg:grid-cols6 xl:grid-cols-7 items-center justify-center gap-5 px-3 py-3">
        {list.map((brand) => (
          <Link
            href={`/brand/${brand}`}
            className="border-2 text-center py-3"
            key={brand}
          >
            {brand}
          </Link>
        ))}
      </ul>
      <h1 className="text-xl font-bold">
        Type
      </h1>
      <ul className="grid grid-cols-3 sm:grid-grid-cols-4 md:grid-cols-5 lg:grid-cols6 xl:grid-cols-7 items-center justify-center gap-5 px-3 py-3">
        {typeList.map((type) => (
          <Link
            href={`/type/${type}`}
            className="border-2 text-center py-3"
            key={type}
          >
            {type}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
