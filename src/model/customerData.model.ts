export interface CustomerDataModel {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  newsletter: boolean;
}

export const initialCustomerDataModel: CustomerDataModel = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  newsletter: true
}
