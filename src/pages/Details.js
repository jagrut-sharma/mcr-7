import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../utils/data";

export default function Details() {
  const { continentID, countryID, destinationID } = useParams();

  const selectedContinent = data.continents.find(
    ({ id }) => id === +continentID
  );

  const selectedCountry = selectedContinent.countries.find(
    ({ id }) => id === +countryID
  );

  const selectedDestination = selectedCountry.destinations.find(
    ({ id }) => id === +destinationID
  );

  console.log(selectedDestination);

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-center p-4 pt-8 text-3xl text-white font-bold">
        {selectedDestination.name}
      </h1>

      <div className="flex items-center justify-center mt-4 w-[60%] gap-4">
        <div>
          <img
            src={selectedDestination.image}
            alt={selectedDestination.name}
            className="w-[20rem]"
          />
        </div>
        <div>
          <h1 className="text-white">
            <span className="text-violet-500">Description: </span>
            {selectedDestination.description}
          </h1>
        </div>
      </div>
    </main>
  );
}
