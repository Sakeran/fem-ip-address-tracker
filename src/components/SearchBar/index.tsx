import { Component } from "solid-js";

import IconArrow from "../../assets/icon-arrow.svg";

import styles from "./SearchBar.module.scss";

export const SearchBar: Component<{
  onNewSearch: (newInput: string) => void;
}> = (props) => {

  let ipSearch: HTMLInputElement | undefined;

  const submit = (e: Event) => {
    e.preventDefault();

    if (!ipSearch?.value) return;

    props.onNewSearch(ipSearch.value);
  };

  return (
    <form role="search" class={styles.SearchBar} onSubmit={submit}>
      <label class="sr-only" htmlFor="ip-address-search">
        IP Address to search
      </label>
      <input
        ref={ipSearch}
        type="search"
        name="ip-address-search"
        id="ip-address-search"
        placeholder="Search for any IP address or domain"
      />
      <button onClick={submit}>
        <span class="sr-only">Search IP</span>
        <img src={IconArrow} alt="" />
      </button>
    </form>
  );
};
