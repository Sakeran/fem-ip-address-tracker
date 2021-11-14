import { Component, createSignal, Show } from "solid-js";
import isIp from "validator/lib/isIp";
import isFQDN from "validator/lib/isFQDN";

import { IpLookupTarget } from "../../adapters/ipLookup";

import IconArrow from "../../assets/icon-arrow.svg";

import styles from "./SearchBar.module.scss";

export const SearchBar: Component<{
  onNewSearch: (newInput: IpLookupTarget) => void;
}> = (props) => {
  const [showHint, setHint] = createSignal(false);

  let ipSearch: HTMLInputElement | undefined;
  let hintRef: HTMLParagraphElement | undefined;

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
    setHint(true);
    if (ipSearch) ipSearch.value = "";
    hintRef && hintRef.focus();
  };

  return (
    <form role="search" onSubmit={submit} class="pos-rel">
      <Show when={showHint()}>
        <p
          tabIndex="0"
          ref={hintRef}
          class={`${styles.Hint} pad-200 text-white bg-gray-200`}
        >
          Please enter a valid IP address or domain.
        </p>
      </Show>
      <div class={styles.SearchBar}>
        <label class="sr-only" htmlFor="ip-address-search">
          IP Address to search
        </label>
        <input
          ref={ipSearch}
          type="search"
          name="ip-address-search"
          id="ip-address-search"
          placeholder="Search for any IP address or domain"
          onKeyUp={() => showHint() && setHint(false)}
        />
        <button onClick={submit}>
          <span class="sr-only">Search IP</span>
          <img src={IconArrow} alt="" />
        </button>
      </div>
    </form>
  );
};
