import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarConfiguratorService {
  private customerDataSubject = new BehaviorSubject<any>(null);
  private baseConfigurationSubject = new BehaviorSubject<any>(null);
  private extraConfigurationSubject = new BehaviorSubject<any>(null);

  customerData$:Observable<any> = this.customerDataSubject.asObservable();
  baseConfiguration$:Observable<any> = this.baseConfigurationSubject.asObservable();
  extraConfiguration$:Observable<any>= this.extraConfigurationSubject.asObservable();

  setCustomerData(data: any) {
    this.customerDataSubject.next(data);
  }

  setBaseConfig(data: any) {
    this.baseConfigurationSubject.next(data);
  }

  setExtraConfig(data: any) {
    this.extraConfigurationSubject.next(data);
  }

}
