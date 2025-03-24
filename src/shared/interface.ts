export interface PassesTeycaProps {
  template: string;
  first_name: string;
  last_name: string;
  pat_name?: string;
  phone: string;
  email: string;
  birthday: string;
  gender?: string;
  barcode?: string;
  discount?: string;
  bonus?: number;
  loyalty_level?: string;
}

export interface getTokenProps {
  identifier: string;
  status: boolean;
  token: string;
}
