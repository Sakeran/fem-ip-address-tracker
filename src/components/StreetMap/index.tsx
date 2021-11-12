import { Component, createEffect } from "solid-js";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

import { IpLookupResponse } from "../../adapters/ipLookup";
import MapIcon from "../../assets/icon-location.svg";

const tileLayer = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution: `Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`,
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoic2FrZXJhbiIsImEiOiJja3Z2a2dueTM1ajNoMndtbDRlY2puZTl1In0.zJh7KS9x7ffJnImF_scgSQ",
  }
);

const LocationIcon: L.Icon = L.icon({
  iconUrl: MapIcon,
});

export const StreetMap: Component<{
  details: IpLookupResponse | undefined;
}> = (props) => {
  let mapRef: HTMLDivElement | undefined;

  let leafletMap: L.Map;
  let leafletMarker: L.Marker;

  const getMap = () => {
    if (!mapRef) return;
    if (leafletMap) return leafletMap;

    // Initialize Map
    mapRef.style.height = `${mapRef.clientHeight}px`;
    leafletMap = L.map(mapRef);

    // Set map zoom control position
    leafletMap.zoomControl.setPosition("bottomleft");

    // Add map tiles
    tileLayer.addTo(leafletMap);

    // Add current location marker
    leafletMarker = L.marker([0, 0], { icon: LocationIcon });
    leafletMarker.addTo(leafletMap);

    return leafletMap;
  };

  createEffect(() => {
    if (!props.details) return;
    if("error" in props.details) return;

    const lmap = getMap();
    if (!lmap) return;

    const { lat, lng } = props.details.location;

    leafletMarker.setLatLng([lat, lng]);
    lmap.setView([lat, lng], 13);
  });

  return <div ref={mapRef}></div>;
};
