import {
  Component,
  createResource,
  createSignal,
  Show,
} from "solid-js";
import { Portal } from "solid-js/web";

import { IpDetails } from "./components/IpDetails";
import { SearchBar } from "./components/SearchBar";
import { StreetMap } from "./components/StreetMap";

import { ipLookup, IpLookupTarget } from "./adapters/ipLookup";

import styles from "./App.module.scss";

const App: Component = () => {
  const [query, setQuery] = createSignal<IpLookupTarget>({ self: true });
  const [ipData] = createResource(query, ipLookup);

  const onNewSearch = (newSearch: IpLookupTarget) => {
    setQuery(() => newSearch);
  };

  const isError = () => {
    const data = ipData();
    if (!data) return false;
    return ("error" in data);
  }
  
  const errorMsg = () => {
    const data = ipData();
    if (data && "error" in data) {
      return data.error;
    }
    return "";
  }

  return (
    <div class={styles.Layout}>
      <Portal mount={document.getElementById("app-modal") || undefined}>
        <Show when={isError()}>
          <div className="app-modal cover">
            <div class="bg-white pad-400 flex-col text-center center cover-primary">
              <h2 class="fs-600">Error</h2>
              <p class="fs-400">{errorMsg()}</p>
            </div>
          </div>
        </Show>
      </Portal>
      <div class={`${styles.LayoutUI} flow`}>
        <h1 class="text-white fs-600 fw-500 text-center">IP Address Tracker</h1>

        <div class={`${styles.SearchBarContainer} center`}>
          <SearchBar onNewSearch={onNewSearch} />
        </div>

        <div class={`${styles.DetailsContainer}`}>
          <div className="center">
            <IpDetails details={ipData()} />
          </div>
        </div>
      </div>

      <div class={`${styles.MapContainer}`}>
        <StreetMap details={ipData()} />
      </div>
    </div>
  );
};

export default App;
