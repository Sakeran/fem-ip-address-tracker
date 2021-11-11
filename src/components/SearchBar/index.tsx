import { Component } from "solid-js";
import isIp from "validator/lib/isIp";
import isFQDN from "validator/lib/isFQDN";

import { IpLookupTarget } from "../../adapters/ipLookup";

import IconArrow from "../../assets/icon-arrow.svg";

import styles from "./SearchBar.module.scss";

export const SearchBar: Component<{
  onNewSearch: (newInput: IpLookupTarget) => void;
}> = (props) => {
  let ipSearch: HTMLInputElement | undefined;

  const submit = (e: Event) => {
    e.preventDefault();

    const search = ipSearch?.value;
    if (!search) return;

    // Return an IP search, if it is an IP address
    if (isIp(search)) {
      return props.onNewSearch({
        ipAddr: search,
      });
    }

    // Return a domain search, if it is a FQDN
    if (isFQDN(search)) {
      return props.onNewSearch({
        domain: search,
      });
    }

    // Otherwise, display a hint
    // TODO - Display Hint
    console.log("Invalid Query");
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
