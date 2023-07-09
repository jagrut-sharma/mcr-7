import React from "react";
import { useData } from "../context/dataContext";

export default function Home() {
  return (
    <div className="h-screen bg-gray-900">
      <h1 className="text-3xl font-bold font-Merriweather text-center p-4 pt-8 text-white">
        Welcome to Trip Advisor
      </h1>
      <p className="text-xl font-Libre text-center text-violet-500 font-bold">
        Top Continents for your next holiday
      </p>
    </div>
  );
}
