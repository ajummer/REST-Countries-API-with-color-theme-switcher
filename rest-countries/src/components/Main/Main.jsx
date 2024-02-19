import SearchBar from "../SearchBar/SearchBar.jsx";
import Filter from "../Filter/Filter.jsx";
import styles from "./main.module.css";
import Cards from "../Cards/Cards.jsx";

import { useState } from "react";

export default function Main() {
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };
  console.log(selectedRegion);
  return (
    <>
      <div className={styles.upper}>
        <SearchBar />
        <Filter
          onRegionChange={handleRegionChange}
          selectedRegion={selectedRegion}
        />
      </div>
      <div className={styles.main}>
        <Cards />
      </div>
    </>
  );
}
