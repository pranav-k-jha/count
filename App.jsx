import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";

import "./App.css";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("ind");

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} onChange />
          <SelectMenu />
        </div>
        <CountriesList query={query}/>
      </main>
    </>
  );
}
