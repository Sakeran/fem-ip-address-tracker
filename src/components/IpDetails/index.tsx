import { Component } from "solid-js";

import styles from "./IpDetails.module.scss";

export const IpDetails: Component = () => {
  return (
    <div class={`bg-white ${styles.IpDetails}`}>
      <dl class="flex-col">
        <div class="flow">
          <dt class="text-gray-400 fs-200 fw-700 uppercase letter-spacing-1">IP Address</dt>
          <dd class="fs-500 fw-500">192.212.174.101</dd>
        </div>
        <div class="flow">
          <dt class="text-gray-400 fs-200 fw-700 uppercase letter-spacing-1">Location</dt>
          <dd class="fs-500 fw-500">Brooklyn, NY 10001</dd>
        </div>
        <div class="flow">
          <dt class="text-gray-400 fs-200 fw-700 uppercase letter-spacing-1">Timezone</dt>
          <dd class="fs-500 fw-500">UTC -05:00</dd>
        </div>
        <div class="flow">
          <dt class="text-gray-400 fs-200 fw-700 uppercase letter-spacing-1">ISP</dt>
          <dd class="fs-500 fw-500">SpaceX Starlink</dd>
        </div>
      </dl>
    </div>
  );
};
