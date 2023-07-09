import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../utils/data";
import { FaLocationDot } from "react-icons/fa6";

export default function Country() {
  const { continentName } = useParams();

  const selectedContinent = data.continents.find(
    ({ name }) => name === continentName
  );

  const { countries } = selectedContinent;

  return (
    <main className="pt-8">
      <p className="text-xl font-Libre text-center text-violet-500 font-bold">
        Top countries in {selectedContinent.name} for your next holiday
      </p>

      <div className="mt-8 flex gap-8 justify-center">
        {countries.map((country) => (
          <Link to={`/${continentName}/${country.name}`} key={country.id}>
            <div className="relative">
              <img
                src={country.image}
                alt={country.name}
                className="w-[20rem] h-[18rem] object-cover rounded-lg"
              />

              <div className="flex gap-2 items-center absolute bottom-4 left-2">
                <FaLocationDot color="#ffffff" />
                <p className="text-white">{country.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
