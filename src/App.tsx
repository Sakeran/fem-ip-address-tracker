import type { Component } from "solid-js";
import { IpDetails } from "./components/IpDetails";
import { SearchBar } from "./components/SearchBar";
import { StreetMap } from "./components/StreetMap";

import styles from "./App.module.scss";

const App: Component = () => {

  const onNewSearch = (newSearch: string) => {
    console.log(newSearch);
  }

  return (
    <div class={styles.Layout}>
      <div class={`${styles.LayoutUI} flow`}>
        <h1 class="text-white fs-600 fw-500 text-center">IP Address Tracker</h1>

        <div class={`${styles.SearchBarContainer} center`}>
          <SearchBar onNewSearch={onNewSearch} />
        </div>

        <div class={`${styles.DetailsContainer}`}>
          <div className="center">
            <IpDetails />
          </div>
        </div>

      </div>

      <div class={`${styles.MapContainer}`}>
        <StreetMap />
      </div>
    </div>
  );
};

export default App;
