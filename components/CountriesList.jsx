import { useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList({query}) {

  const filteredCountries = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(query)
  );
  console.log(filteredCountries);

  const array = countriesData
    .filter((country) => country.name.common.toLowerCase().includes(query))
    .map((country) => {
      return (
        <CountryCard
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population.toLocaleString()}
          region={country.region}
          capital={country.capital?.[0]}
        />
      );
    });
  return <div className="countries-container">{array}</div>;
}
