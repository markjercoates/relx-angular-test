export interface Company {
  company_status: string;
  address_snippet: string;
  date_of_creation: Date;
  matches: Matches;
  description: string;
  links: Links;
  company_number: string;
  title: string;
  company_type: string;
  address: Address;
  kind: string;
  description_identifier: string[];
}

interface Address {
  postal_code: string;
  country: string;
  locality: string;
  address_line_1: string;
  address_line_2: string;
}

interface Links {
  self: string;
}

interface Matches {
  title: number[];
}

