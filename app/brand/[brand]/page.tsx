import Image from "next/image";
import React from "react";

type Props = {
  params: {
    brand: string;
  };
};
async function getData(brand: string) {
  const res = await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
  );
  return res.json();
}
async function BrandPage({ params: { brand } }: Props) {
  const data = await getData(brand);
  return (
    <>
      <h1 className="uppercase">{brand.replaceAll("%20", " ")}</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-5">
        {data.map((data: any) => (
          <li key={data.id} className="border-2">
            <h1>
              Name: <span className="text-lg font-bold"> {data.name}</span>
            </h1>
            <p>
              Price:{" "}
              <span className="text-lg font-semibold">{data.price}$</span>
            </p>
            <Image src={data.image_link} alt="image" width={100} height={100} />
            <p>{data.description}</p>
            <p>
              Rating <span className="text-lg font-bold">{data.rating}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BrandPage;
