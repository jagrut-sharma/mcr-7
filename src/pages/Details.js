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

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-center p-4 pt-8 text-3xl text-white font-bold">
        {selectedDestination.name}
      </h1>

      <div className="flex justify-center mt-4 w-[60%] gap-4">
        <div className="h-max">
          <img
            src={selectedDestination.image}
            alt={selectedDestination.name}
            className=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-white">
            <span className="text-violet-500">Description: </span>
            {selectedDestination.description}
          </h1>

          <p className="text-white">
            {" "}
            <span className="text-violet-500">Ratings: </span>
            {selectedDestination.ratings}
          </p>
          <p className="text-white">
            {" "}
            <span className="text-violet-500">Reviews: </span>
            {selectedDestination.reviews}
          </p>
          <p className="text-white">
            {" "}
            <span className="text-violet-500">Location: </span>
            {selectedDestination.location}
          </p>
          <p className="text-white">
            {" "}
            <span className="text-violet-500">Opening Hours: </span>
            {selectedDestination.openingHours}
          </p>
          <p className="text-white">
            {" "}
            <span className="text-violet-500">Ticket price : </span>
            {selectedDestination.ticketPrice}
          </p>
          <p className="text-red-300">Website</p>
        </div>
      </div>
    </main>
  );
}
