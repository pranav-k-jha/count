import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} onChange />
        <SelectMenu />
      </div>

      <CountriesList query={query} />
    </main>
  );
}
