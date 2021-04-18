import { CurrencyType } from '../utils/CurrencyType';

export interface PreapprovalObjType {
  //  URL to redirect users when success
  returnUrl: string;
  // URL to redirect users when cancelled
  cancelUrl: string;
  // URL to callback the status of the payment (Needs to be a URL accessible on a public IP/domain)
  notifyUrl: string;
  // Customer’s First Name
  firstName: string;
  // Customer’s Last Name
  lastName: string;
  // Customer’s Email
  email: string;
  // Customer’s Phone No
  phone: string;
  // Customer’s Address Line1 + Line2
  address: string;
  // Customer’s City
  city: string;
  // Customer’s Country
  country: string;
  // Order ID generated by the merchant
  order_id: string;
  // Item title or Order/Invoice number, named as items in original API
  itemTitle: string;
  // Currency Code (LKR/USD)
  currency: CurrencyType;
  

  /* Optional patameters*/
  // Referring Platform
  platform: string,
  // Custom param 1 set by merchant
  custom1: string,
  // Custom param 2 set by merchant 
  custom2: string,
  // Generated hash value to ensure extra security
  hash?: string;
}
