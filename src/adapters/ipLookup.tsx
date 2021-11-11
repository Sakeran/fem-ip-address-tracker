export type IpLookupTarget =
  | { domain: string }
  | { ipAddr: string }
  | undefined;

interface IpLookupResult {
  ip: string;

  isp: string;

  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    geonameId: number;
  };

  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
}

export async function ipLookup(
  target: IpLookupTarget
): Promise<IpLookupResult> {
  const request = new URL(
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_vxUDa87tQTg0NlGqoUVERbOR1R0Z0"
  );

  if (target) {
    if ("ipAddr" in target) {
      request.searchParams.append("ip", target.ipAddr);
    } else {
      request.searchParams.append("domain", target.domain);
    }
  }

  console.log(request);

  const resStub: IpLookupResult = {
    ip: "0.0.0.0.",

    isp: "THANKS",

    location: {
      country: "",
      region: "",
      city: "",
      lat: 0,
      lng: 0,
      postalCode: "",
      geonameId: 0,
    },

    as: {
      asn: 0,
      name: "",
      route: "",
      domain: "",
      type: "",
    },
  };

  return Promise.resolve(resStub);
}
