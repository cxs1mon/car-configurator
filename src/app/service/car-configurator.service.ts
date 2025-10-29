import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CustomerDataModel, initialCustomerDataModel} from '../../model/customerData.model';
import {BaseConfigDataModel, initialBaseConfigDataModel} from '../../model/baseConfigDataModel';
import {ExtrasModel, initialExtrasModel} from '../../model/extrasModel';

@Injectable({
  providedIn: 'root'
})
export class CarConfiguratorService {
  private customerDataSubject = new BehaviorSubject<CustomerDataModel>(initialCustomerDataModel);
  private baseConfigurationSubject = new BehaviorSubject<BaseConfigDataModel>(initialBaseConfigDataModel);
  private extraConfigurationSubject = new BehaviorSubject<ExtrasModel[]>(initialExtrasModel);

  customerData$:Observable<CustomerDataModel> = this.customerDataSubject.asObservable();
  baseConfiguration$:Observable<BaseConfigDataModel> = this.baseConfigurationSubject.asObservable();
  extraConfiguration$:Observable<ExtrasModel[]>= this.extraConfigurationSubject.asObservable();

  setCustomerData(data: CustomerDataModel): void {
    this.customerDataSubject.next(data);
  }

  setBaseConfig(data: BaseConfigDataModel): void {
    this.baseConfigurationSubject.next(data);
  }

  setExtraConfig(data: ExtrasModel[]): void {
    this.extraConfigurationSubject.next(data);
  }

}
