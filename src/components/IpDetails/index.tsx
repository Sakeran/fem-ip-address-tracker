import { Component } from "solid-js";
import { toAbbr } from "convert-region";
import { IpLookupResult } from "../../adapters/ipLookup";

import styles from "./IpDetails.module.scss";

// Helpers for formatting the details prop

const showIpAddress = (details: IpLookupResult | undefined): string => {
  return details?.ip ?? "--.--.--.--";
};

const showLocation = (details: IpLookupResult | undefined): string => {
  const city = details?.location.city ?? "-----";

  // Attempt to abbreviate region
  let region: string = "--";
  if (details?.location.region) {
    const abbr = toAbbr(details.location.region);
    region = abbr ? abbr : details.location.region;
  }
  
  const postalCode = details?.location.postalCode ?? "-----";
  return `${city}, ${region}, ${postalCode}`;
};

const showTimezone = (details: IpLookupResult | undefined): string => {
  return "UTC " + details?.location.timezone ?? "--:--";
};

const showISP = (details: IpLookupResult | undefined): string => {
  return details?.isp ?? "-------";
};

export const IpDetails: Component<{
  details: IpLookupResult | undefined;
}> = (props) => {
  return (
    <div class={`bg-white ${styles.IpDetails}`}>
      <dl class="flex-col">
        <div class="flow">
          <dt class="text-gray-400 fs-200 fw-700 uppercase letter-spacing-1">
            Ip Address
          </dt>
          <dd class="fs-500 fw-500">{showIpAddress(props.details)}</dd>
        </div>
        <div class="flow">
          <dt class="text-gray-400 fs-200 fw-700 uppercase letter-spacing-1">
            Location
          </dt>
          <dd class="fs-500 fw-500">{showLocation(props.details)}</dd>
        </div>
        <div class="flow">
          <dt class="text-gray-400 fs-200 fw-700 uppercase letter-spacing-1">
            Timezone
          </dt>
          <dd class="fs-500 fw-500">{showTimezone(props.details)}</dd>
        </div>
        <div class="flow">
          <dt class="text-gray-400 fs-200 fw-700 uppercase letter-spacing-1">
            ISP
          </dt>
          <dd class="fs-500 fw-500">{showISP(props.details)}</dd>
        </div>
      </dl>
    </div>
  );
};
