import { Component } from "solid-js";

import IconArrow from "../../assets/icon-arrow.svg";

import styles from "./SearchBar.module.scss";

export const SearchBar: Component = () => {
  return (
    <form role="search" class={styles.SearchBar}>
      <label class="sr-only" htmlFor="ip-address-search">
        IP Address to search
      </label>
      <input
        type="search"
        name="ip-address-search"
        id="ip-address-search"
        placeholder="Search for any IP address or domain"
      />
      <button>
        <span class="sr-only">Search IP</span>
        <img src={IconArrow} alt="" />
      </button>
    </form>
  );
};
