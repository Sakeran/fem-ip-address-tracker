declare module "convert-region" {
  export default function convertRegion(abbrev: string): string;
  export function toAbbr(fullname: string): string | undefined;
}
