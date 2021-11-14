export type IpLookupTarget =
  | { domain: string }
  | { ipAddr: string }
  | { self: true };

export type IpLookupResponse = IpLookupResult | IpLookupError;

// Generated by https://quicktype.io
export interface IpLookupResult {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
  domains?: string[];
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}

export interface IpLookupError {
  error: string;
}

export async function ipLookup(
  target: IpLookupTarget
): Promise<IpLookupResponse> {
  const request = new URL(
    "https://us-central1-ip-addr-proxy.cloudfunctions.net/ipProxy"
  );

  if (!("self" in target)) {
    if ("ipAddr" in target) {
      request.searchParams.append("ip", target.ipAddr);
    } else {
      request.searchParams.append("domain", target.domain);
    }
  }

  try {
    return (await fetch(request.href)).json();
  } catch {
    return { error: "Request Failed" };
  }
}
