import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { data } from "../utils/data";
import { Link } from "react-router-dom";

export default function Home() {
  const { continents } = data;
  return (
    <div>
      <h1 className="text-3xl font-bold font-Merriweather text-center p-4 pt-8 text-white">
        Welcome to Trip Advisor
      </h1>
      <p className="text-xl font-Libre text-center text-violet-500 font-bold">
        Top Continents for your next holiday
      </p>

      <main className="flex gap-8 justify-center mt-8">
        {continents.map((continent) => (
          <Link to={`/continent/${continent.id}`} key={continent.id}>
            <div className="relative">
              <img
                src={continent.image}
                alt={continent.name}
                className="w-[20rem] rounded-lg"
              />

              <div className="flex gap-2 items-center absolute bottom-4 left-2">
                <FaLocationDot color="#ffffff" />
                <p className="text-white">{continent.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
