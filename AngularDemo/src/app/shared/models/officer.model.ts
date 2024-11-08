export interface Officer  {
  address: {
    premises: string;
    postal_code: string;
    country: string;
    locality: string;
    region: string;
    address_line_1: string;
  };
  name: string;
  appointed_on: string;
  officer_role: string;
  links: {
    officer: {
      appointments: string;
    };
  };
  date_of_birth: DateOfBirth;
  occupation: string;
  country_of_residence: string;
  nationality: string;
  resigned_on: string;
}

interface DateOfBirth {
  month: number;
  year: number;
}
