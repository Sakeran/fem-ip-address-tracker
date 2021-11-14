import { Component, Resource, Show } from "solid-js";
import { toAbbr } from "convert-region";
import { IpLookupResponse, IpLookupResult } from "../../adapters/ipLookup";

import styles from "./IpDetails.module.scss";

// Helpers for formatting the details prop

const showIpAddress = (details: IpLookupResult): string => {
  return details.ip;
};

const showLocation = (details: IpLookupResult): string => {
  const city = details.location.city;

  // Attempt to abbreviate region
  let region: string = "";
  if (details.location.region) {
    const abbr = toAbbr(details.location.region);
    region = abbr ? abbr : details.location.region;
  }
  
  const postalCode = details.location.postalCode;
  return `${city}, ${region}, ${postalCode}`;
};

const showTimezone = (details: IpLookupResult): string => {
  return "UTC " + details.location.timezone;
};

const showISP = (details: IpLookupResult): string => {
  return details.isp;
};

export const IpDetails: Component<{
  details: Resource<IpLookupResponse | undefined>;
}> = (props) => {
  
  const showData = () => {
    if (props.details.loading || props.details.error) return false;  
    const details = props.details();
    if (!details) return false;

    if ("error" in details) return false;
    return true;
  }

  return (
    <div class={`bg-white ${styles.IpDetails}`}>
      <Show when={showData()}>
        <dl class="flex-col">
          <div class="flow">
            <dt class="text-gray-400 fs-200 fw-700 uppercase letter-spacing-1">
              Ip Address
            </dt>
            <dd class="fs-500 fw-500">{showIpAddress(props.details() as IpLookupResult)}</dd>
          </div>
          <div class="flow">
            <dt class="text-gray-400 fs-200 fw-700 uppercase letter-spacing-1">
              Location
            </dt>
            <dd class="fs-500 fw-500">{showLocation(props.details() as IpLookupResult)}</dd>
          </div>
          <div class="flow">
            <dt class="text-gray-400 fs-200 fw-700 uppercase letter-spacing-1">
              Timezone
            </dt>
            <dd class="fs-500 fw-500">{showTimezone(props.details() as IpLookupResult)}</dd>
          </div>
          <div class="flow">
            <dt class="text-gray-400 fs-200 fw-700 uppercase letter-spacing-1">
              ISP
            </dt>
            <dd class="fs-500 fw-500">{showISP(props.details() as IpLookupResult)}</dd>
          </div>
        </dl>
      </Show>
    </div>
  );
};
