import type { Component } from "solid-js";
import { IpDetails } from "./components/IpDetails";
import { SearchBar } from "./components/SearchBar";
import { StreetMap } from "./components/StreetMap";

const App: Component = () => {
  return (
    <div>
      <h1 class="text-white fs-600 uppercase fw-700">IP Address Tracker</h1>
      <SearchBar />
      <IpDetails />
      <StreetMap />
    </div>
  );
};

export default App;
