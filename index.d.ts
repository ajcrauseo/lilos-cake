// type Url = string

// type Json =
//   | string
//   | number
//   | boolean
//   | null
//   | { [property: string]: Json }
//   | Json[]

// type TProduct = {
//   id: string
//   name: string
//   sku: string
//   price: number
//   image: Url
// }



export interface TProduct {
  id:            string;
  created:       number;
  updated:       number;
  active:        boolean;
  permalink:     string;
  name:          string;
  description:   string;
  price:         Price;
  inventory:     Inventory;
  sku:           null;
  sort_order:    number;
  seo:           SEO;
  thank_you_url: null;
  meta:          null;
  conditionals:  { [key: string]: boolean };
  is:            Is;
  has:           Has;
  collects:      Collects;
  checkout_url:  CheckoutURL;
  categories:    Category[];
  image:         Image;
}

export interface TCategory {
  id:   string;
  slug: string;
  name: string;
}

export interface TCheckoutURL {
  checkout: string;
  display:  string;
}

export interface TCollects {
  fullname:         boolean;
  shipping_address: boolean;
  billing_address:  boolean;
  extra_fields:     boolean;
}

export interface THas {
  digital_delivery:  boolean;
  physical_delivery: boolean;
  images:            boolean;
}

export interface TImage {
  id:               string;
  url:              string;
  description:      null;
  is_image:         boolean;
  filename:         string;
  file_size:        number;
  file_extension:   string;
  image_dimensions: ImageDimensions;
  meta:             any[];
  created_at:       number;
  updated_at:       number;
}

export interface TImageDimensions {
  width:  number;
  height: number;
}

export interface TInventory {
  managed:   boolean;
  available: number;
}

export interface TIs {
  active:            boolean;
  tax_exempt:        boolean;
  pay_what_you_want: boolean;
  inventory_managed: boolean;
  sold_out:          boolean;
}

export interface TPrice {
  raw:                   number;
  formatted:             string;
  formatted_with_symbol: string;
  formatted_with_code:   string;
}

export interface TSEO {
  title:       null;
  description: null;
}


type TAPIResponse = {
  data: TProduct[]
  error?: string
}