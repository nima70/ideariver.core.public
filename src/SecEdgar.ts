export interface IRecent {
  id: string;
  accessionNumber: string;
  filingDate: string;
  reportDate: string;
  acceptanceDateTime: string;
  act: string;
  form: string;
  fileNumber: string;
  filmNumber: string;
  items: string;
  size: number;
  isXBRL: number;
  isInlineXBRL: number;
  primaryDocument: string;
  primaryDocDescription: string;
  filings: IFilings;
}

export interface IFile {
  id: string;
  name: string;
  filingCount: number;
  filingFrom: string;
  filingTo: string;
  filings: IFilings;
}

export interface IFilings {
  id: string;
  recent: IRecent[];
  files: IFile[];
  company: ICompany;
}

export interface IAddress {
  id: string;
  type: string;
  street1: string;
  street2?: string;
  city: string;
  stateOrCountry: string;
  zipCode: string;
  stateOrCountryDescription: string;
  company: ICompany;
}

export interface IFormerName {
  id: string;
  name: string;
  from: string;
  to: string;
  company: ICompany;
}

export interface ICompany {
  id: string;
  name: string;
  cik: string;
  entityType: string;
  sic: string;
  sicDescription: string;
  insiderTransactionForOwnerExists: number;
  insiderTransactionForIssuerExists: number;
  tickers: string[];
  exchanges: string[];
  ein: string;
  description: string;
  website: string;
  investorWebsite: string;
  category: string;
  fiscalYearEnd: string;
  stateOfIncorporation: string;
  stateOfIncorporationDescription: string;
  addresses: IAddress[];
  phone: string;
  flags: string;
  formerNames: IFormerName[];
  filings: IFilings;
}
