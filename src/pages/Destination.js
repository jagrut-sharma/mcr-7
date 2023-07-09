import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../utils/data";
import { FaLocationDot } from "react-icons/fa6";

export default function Destination() {
  const { continentName, countryName } = useParams();

  const selectedContinent = data.continents.find(
    ({ name }) => name === continentName
  );

  const selectedCountry = selectedContinent.countries.find(
    ({ name }) => name === countryName
  );

  return (
    <main className="pt-8">
      <p className="text-xl font-Libre text-center text-violet-500 font-bold">
        Top countries in {selectedCountry.name} for your next holiday
      </p>

      <div className="mt-8 flex gap-8 justify-center">
        {selectedCountry.destinations.map((destination) => (
          <Link
            to={`/${continentName}/${countryName}/${destination.name}`}
            key={destination.id}
          >
            <div className="relative">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-[20rem] h-[18rem] object-cover rounded-lg"
              />

              <div className="flex gap-2 items-center absolute bottom-4 left-2">
                <FaLocationDot color="#ffffff" />
                <p className="text-white">{destination.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
