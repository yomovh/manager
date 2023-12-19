export default interface Config {
  listing?: Listing;
  iam?: IamPage;
}

export interface IamPage {
  [key: string]: string[];
}

export interface Listing {
  datagrid?: Datagrid;
}

export interface Datagrid {
  serviceKey?: string;
}
